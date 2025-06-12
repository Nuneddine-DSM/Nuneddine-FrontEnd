import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { Input, Button } from '../';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  memo,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { LensDateType, LensDateTypeMap } from '../../app/Data';
import { BackHandler, TextInput, View } from 'react-native';
import { Alert } from 'react-native';

interface AddLensBottomSheetProps {
  loading: boolean;
  bottomSheetModalRef: RefObject<BottomSheetModal | null>;
  onAddLens: (lensName: string, lensCycle: LensDateType) => void;
}

export const AddLensBottomSheet = memo(
  ({ loading, bottomSheetModalRef, onAddLens }: AddLensBottomSheetProps) => {
    const [lensName, setLensName] = useState('');
    const [lensCycle, setLensCycle] = useState<LensDateType>('DATE');

    const snapPoints = useMemo(() => ['50%'], []);
    const [isOpen, setIsOpen] = useState(false);

    const addLens = useCallback(() => {
      if (lensName) {
        setLensName('');
        setLensCycle('DATE');
        onAddLens(lensName, lensCycle);
        bottomSheetModalRef.current?.dismiss();
      }
    }, [lensName, lensCycle, onAddLens, bottomSheetModalRef]);

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close"
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );

    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsContentVisible(true), 100); // 100~300ms 권장
      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (isOpen) {
            bottomSheetModalRef.current?.dismiss();
            return true;
          }
          return false;
        }
      );

      return () => backHandler.remove();
    }, [isOpen]);

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableContentPanningGesture={false}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        onChange={index => {
          setIsOpen(index >= 0);
        }}>
        {isContentVisible && (
          <BottomSheetWrapper>
            <Font text="렌즈 항목" kind="medium16" color="gray600" />
            <Input
              label="제품명"
              placeholder="상품명을 입력하세요."
              value={lensName}
              multiline={false}
              onChangeText={setLensName}
            />
            <View style={{ gap: 8 }}>
              <Font text="주기" kind="semi16" color="gray600" />
              <SwitchButtonBox>
                {Object.entries(LensDateTypeMap).map(([key, value]) => (
                  <SwitchButton
                    key={key}
                    isSelected={lensCycle === key}
                    onPress={() => {
                      setLensCycle(key as LensDateType);
                    }}>
                    <Font
                      text={value}
                      kind="medium16"
                      color={lensCycle === key ? 'white' : 'black'}
                    />
                  </SwitchButton>
                ))}
              </SwitchButtonBox>
            </View>
          </BottomSheetWrapper>
        )}
        <AddButtonBox>
          <Button
            onPress={() => {
              if (!lensName.trim()) {
                Alert.alert('렌즈 이름을 입력해주세요');
              } else {
                addLens();
              }
            }}
            buttonColor="black"
            text="렌즈 추가하기"
            loading={loading}
          />
        </AddButtonBox>
      </BottomSheetModal>
    );
  }
);

const BottomSheetWrapper = styled.View`
  width: 100%;
  padding: 20px 26px;
  flex: 1;
  flex-direction: column;
  gap: 25px;
  position: relative;
`;

const SwitchButtonBox = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const SwitchButton = styled.TouchableOpacity<{
  isSelected: boolean;
}>`
  padding: 10px 16px;
  border-radius: 7.2px;
  background-color: ${({ isSelected }) =>
    isSelected ? color.black : color.white};
  border-color: ${({ isSelected }) =>
    isSelected ? color.black : color.gray300};
  border-width: 1px;
`;

const AddButtonBox = styled.View`
  width: 100%;
  padding: 12px 20px;
  border-width: 1px;
  border-color: ${color.gray100};
  margin-top: auto;
`;
