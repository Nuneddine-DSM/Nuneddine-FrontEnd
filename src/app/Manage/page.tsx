import { View, SafeAreaView, Alert } from 'react-native';
import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { Header } from '../../components/Main';
import { SquareArrow } from '../../assets/SquareArrow';
import {
  AddLensRequest,
  addMyLens,
  getMyLens,
  MyLensItemData,
  removeMyLens,
  settingRepurchased,
  startLens,
  StartLensRequest
} from '../../apis/alarms';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MyLensListItem from '../../components/Manage/MyLensListItem';
import { SquarePlus } from '../../assets/SquarePlus';
import { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { Button, Input } from '../../components';
import { LensDateType, LensDateTypeMap } from '../Data';
import {
  calculateEndTime,
  calculateProgress,
  calculateStartTime,
  getLensMention
} from '../../utils/lens';

const Manage = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [lensList, setLensList] = useState<MyLensItemData[]>([]);
  const [lensName, setLensName] = useState('');
  const [lateLensPercent, setLateLensPercent] = useState(0);

  const [loading, setLoading] = useState(false);

  const { title, content } = getLensMention(lateLensPercent);

  const useLensCount = lensList.filter(
    lens => lens.start_time && lens.end_time
  ).length;

  const [isExpendedList, setIsExpendedList] = useState<boolean[]>([]);
  const setExpendedListItem = (index: number) => {
    setIsExpendedList(prev =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const [selectedDuration, setSelectedDuration] =
    useState<LensDateType>('DATE');

  const modalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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

  const getLens = async () => {
    try {
      setLoading(true);
      const response = await getMyLens();
      const list = [...response.data.alarm_list].sort((a, b) => {
        if (a.end_time === null && b.end_time === null) return 0;
        if (a.end_time === null) return 1;
        if (b.end_time === null) return -1;

        return new Date(a.end_time).getTime() - new Date(b.end_time).getTime();
      });

      setLensList(list);
      setIsExpendedList(new Array(list.length).fill(false));
      if (list.length && list[0].start_time && list[0].end_time) {
        setLateLensPercent(
          calculateProgress(list[0].start_time, list[0].end_time)
        );
      }
    } catch (err) {
      console.error(err);
      Alert.alert('내 렌즈를 불러오는 데 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLens();
      setIsExpendedList(new Array(lensList.length).fill(false));
    }, [])
  );

  const addLens = async () => {
    try {
      setLoading(true);
      const requestData: AddLensRequest = {
        name: lensName,
        date_type: selectedDuration
      };
      const response = await addMyLens(requestData);
      if (response.status === 200) {
        bottomSheetModalRef.current?.dismiss();
        getLens();
        setLensName('');

        const updatedList = [...isExpendedList];
        updatedList.push(false);
        setIsExpendedList(updatedList);
      } else {
        Alert.alert('렌즈 등록 실패');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('렌즈 등록 중 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  const removeLens = async (alarmId: number, index: number) => {
    try {
      const response = await removeMyLens(alarmId);
      if (response.status === 200) {
        getLens();

        const updatedList = [...isExpendedList];
        updatedList.splice(index, 1);
        setIsExpendedList(updatedList);
      } else {
        console.log(response);
        Alert.alert('렌즈 삭제 실패');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('렌즈 삭제 중 오류 발생');
    }
  };

  const startUseLens = async (item: MyLensItemData) => {
    try {
      const requestData: StartLensRequest = {
        name: item.name,
        date_type: item.date_type,
        start_time: calculateStartTime(),
        end_time: calculateEndTime(item.date_type)
      };
      const response = await startLens(item.alarm_id, requestData);
      if (response.status === 200) {
        getLens();
      } else {
        Alert.alert('렌즈 사용 시작 실패');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('렌즈 시작 중 오류 발생');
    }
  };

  const changeRepurchased = async (alarmId: number) => {
    try {
      const response = await settingRepurchased(alarmId);
      return response.status;
    } catch (err) {
      console.error(err);
      Alert.alert('재구매 알림 설정 변경 중 오류 발생');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <TotalInfoContainer>
          <ExpiratedWrapper>
            <ExpiratedDetailWrapper>
              <View>
                <Font text={title} kind="semi22" />
                <Font text={content} kind="medium22" />
              </View>
              <GoToGuide
                onPress={() => {
                  navigation.navigate('Guide');
                }}>
                <Font
                  text="관리 꿀팁 알아보기"
                  color="gray500"
                  kind="medium16"
                />
                <SquareArrow size={20} color={color.gray500} />
              </GoToGuide>
            </ExpiratedDetailWrapper>
            <ExpiratedImage src="" />
          </ExpiratedWrapper>
          <LensCountWrapper>
            <LensCountTextWrapper>
              <Font text={`${useLensCount}`} kind="medium32" />
              <Font text="착용 렌즈" kind="medium16" color="gray400" />
            </LensCountTextWrapper>
            <LensCountLine />
            <LensCountTextWrapper>
              <Font
                text={`${lensList.length - useLensCount}`}
                kind="medium32"
              />
              <Font text="보유 렌즈" kind="medium16" color="gray400" />
            </LensCountTextWrapper>
          </LensCountWrapper>
        </TotalInfoContainer>
        {lensList.map((item, index) => (
          <MyLensListItem
            key={item.alarm_id}
            item={item}
            isExpended={isExpendedList[index]}
            onButtonPress={() => {
              if (item.start_time && item.end_time) {
                removeLens(item.alarm_id, index);
              } else {
                startUseLens(item);
              }
            }}
            onExpendedPress={() => {
              setExpendedListItem(index);
            }}
            onTogglePress={async () => {
              const status = await changeRepurchased(item.alarm_id);
              if (status === 200) {
                item.is_repurchased = !item.is_repurchased;
              } else {
                Alert.alert('재구매 알림 설정 실패');
              }
            }}
          />
        ))}
        <PostLensBox onPress={modalPress}>
          <SquarePlus color={color.gray500} />
          <Font text="렌즈 추가하기" kind="semi16" color="gray500" />
        </PostLensBox>
      </Container>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableContentPanningGesture={false}
        keyboardBehavior="extend"
        keyboardBlurBehavior="restore">
        <BottomSheetWrapper>
          <Font text="렌즈 항목" kind="medium16" color="gray600" />
          <Input
            label="제품명"
            placeholder="상품명을 입력하세요."
            value={lensName}
            multiline={true}
            onChangeText={setLensName}
          />
          <View style={{ gap: 8 }}>
            <Font text="주기" kind="semi16" color="gray600" />
            <SwitchButtonBox>
              {Object.entries(LensDateTypeMap).map(([key, value]) => (
                <SwitchButton
                  key={key}
                  isSelected={selectedDuration === key}
                  onPress={() => {
                    setSelectedDuration(key as LensDateType);
                  }}>
                  <Font
                    text={value}
                    kind="medium16"
                    color={selectedDuration === key ? 'white' : 'black'}
                  />
                </SwitchButton>
              ))}
            </SwitchButtonBox>
          </View>
        </BottomSheetWrapper>
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
    </SafeAreaView>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${color.white};
  padding: 18px 20px 26px;
`;

const TotalInfoContainer = styled.View`
  padding: 30px 20px;
  gap: 26px;
  flex-direction: column;
  border-width: 1px;
  border-color: ${color.gray300};
  border-radius: 20px;
  margin-bottom: 24px;
`;

const ExpiratedWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ExpiratedDetailWrapper = styled.View`
  flex-direction: column;
  padding-bottom: 6px;
  gap: 18px;
`;

const GoToGuide = styled.TouchableOpacity`
  background-color: ${color.gray50};
  padding: 10px 12px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const ExpiratedImage = styled.Image`
  width: 130px;
  height: 130px;
  background-color: ${color.gray50};
`;

const LensCountWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

const LensCountTextWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const LensCountLine = styled.View`
  width: 2px;
  height: 57px;
  background-color: ${color.gray100};
`;

const PostLensBox = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: row;
  background-color: ${color.white};
  border-radius: 10px;
  border-color: ${color.gray300};
  border-width: 1px;
  margin-bottom: 40px;
`;

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

export default Manage;
