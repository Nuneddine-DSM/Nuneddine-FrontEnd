import { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components/native';
import { TopBar, Button } from '../../components';
import { color, Font } from '../../styles';
import { Arrow } from '../../assets/Arrow';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {
  getLensFrequency,
  LensFrequency,
  setLensFrequency
} from '../../apis/user';
import { getLensFrequencyList } from '../../utils/lens';

const Frequency = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [loading, setLoading] = useState(false);
  const [isLeftSelected, setLeftSelected] = useState(true);
  const [leftSelectedIndex, setLeftSelectedIndex] = useState(0);
  const [rightSelectedIndex, setRightSelectedIndex] = useState(0);

  const selectedIndex = isLeftSelected ? leftSelectedIndex : rightSelectedIndex;
  const lensFrequencyList: number[] = useMemo(() => {
    return getLensFrequencyList();
  }, []);

  const prevPage = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getFrequency = async () => {
      try {
        setLoading(true);
        const response = await getLensFrequency();
        setLeftSelectedIndex(
          response.data.left_lens_power || response.data.left_lens_power !== 1
            ? response.data.left_lens_power * -4
            : 0
        );
        setRightSelectedIndex(
          response.data.right_lens_power || response.data.right_lens_power !== 1
            ? response.data.right_lens_power * -4
            : 0
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFrequency();
  }, []);

  const patchFrequency = async () => {
    try {
      setLoading(true);
      const requestData: LensFrequency = {
        left_lens_power: lensFrequencyList[leftSelectedIndex],
        right_lens_power: lensFrequencyList[rightSelectedIndex]
      };
      const response = await setLensFrequency(requestData);
      if (response.status === 200) {
        navigation.pop();
      } else {
        Alert.alert('렌즈 도수 설정 중 오류가 발생하였습니다');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('렌즈 도수 설정 중 오류가 발생하였습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBar
        text="렌즈 도수 설정"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FrequencyBox>
          <SwitchButtonBox>
            <SwitchButton
              isSelected={isLeftSelected}
              onPress={() => setLeftSelected(true)}>
              <Font
                text={'왼쪽 눈 (L)'}
                kind="semi18"
                color={isLeftSelected ? 'pink300' : 'gray400'}
              />
            </SwitchButton>
            <SwitchButton
              isSelected={!isLeftSelected}
              onPress={() => {
                setLeftSelected(false);
              }}>
              <Font
                text={'오른쪽 눈 (R)'}
                kind="semi18"
                color={!isLeftSelected ? 'pink300' : 'gray400'}
              />
            </SwitchButton>
          </SwitchButtonBox>
          <Space height={36} />
          <Font text={'근시 도수 (SPH)'} kind="semi20" />
          <Space height={10} />
          <Font
            text={'근시 교정을 위한 도수를 선택하세요'}
            kind="regular16"
            color="gray600"
          />
          <Space height={20} />
          <WheelPicker
            selectedIndex={selectedIndex}
            onValueChange={(_, index) => {
              if (isLeftSelected) {
                setLeftSelectedIndex(index);
              } else {
                setRightSelectedIndex(index);
              }
            }}
            lensFrequency={lensFrequencyList}
            isLeftSelected={isLeftSelected}
          />
          <Space height={24} />
          <InfoBox>
            <Font text={'입력된 정보'} kind="semi18" color="black" />
            <Space height={24} />
            <FrequenciesBox>
              <OneFrequency>
                <Font text={'왼쪽 (L)'} kind="medium18" color="gray600" />
                <Font
                  text={`SPH: ${
                    leftSelectedIndex === 0 ||
                    !lensFrequencyList[leftSelectedIndex]
                      ? '-0.00'
                      : lensFrequencyList[leftSelectedIndex].toFixed(2)
                  }`}
                  kind="medium18"
                />
              </OneFrequency>
              <OneFrequency>
                <Font text={'오른쪽 (R)'} kind="medium18" color="gray600" />
                <Font
                  text={`SPH: ${
                    rightSelectedIndex === 0 ||
                    !lensFrequencyList[rightSelectedIndex]
                      ? '-0.00'
                      : lensFrequencyList[rightSelectedIndex].toFixed(2)
                  }`}
                  kind="medium18"
                />
              </OneFrequency>
            </FrequenciesBox>
          </InfoBox>
        </FrequencyBox>
      )}

      <ButtonBox>
        <Button
          text="설정 완료"
          onPress={() => {
            if (!loading) {
              patchFrequency();
            }
          }}
          buttonColor="black"
          loading={loading}
        />
      </ButtonBox>
    </Container>
  );
};

const Space = styled.View<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const Container = styled.View`
  flex: 1;
  padding: 0px;
  flex-direction: column;
  background-color: ${color.white};
`;

const FrequencyBox = styled.View`
  width: 100%;
  padding: 24px 20px;
  margin-top: 64px;
`;

const SwitchButtonBox = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: ${color.gray50};
  padding: 3px;
  flex-direction: row;
`;

const SwitchButton = styled.TouchableOpacity<{
  isSelected: boolean;
}>`
  border-radius: 10px;
  width: 50%;
  padding: 14.5px 0px;
  background-color: ${({ isSelected }) =>
    isSelected ? color.white : color.gray50};
  border-color: ${({ isSelected }) =>
    isSelected ? color.pink300 : color.gray50};
  justify-content: center;
  align-items: center;
`;

const WheelPickerWrapper = styled.View`
  width: 100%;
  height: 300px;
  padding: 0px 25px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${color.gray300};
  overflow: hidden;
`;

const WheelPickerItem = styled.View<{ isSelected: boolean }>`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) =>
    isSelected ? color.transparent : color.transparent};
  border-radius: 10px;
`;

const FixedHighlightedBackground = styled.View`
  position: absolute;
  top: 120px;
  left: 25px;
  width: 100%;
  height: 60px;
  background-color: ${color.gray100};
  border-radius: 10px;
  z-index: -1;
`;

interface WheelPickerPropsType {
  selectedIndex?: number;
  onValueChange?: (value: any, index: number) => void;
  lensFrequency: number[];
  isLeftSelected?: boolean;
}

const WheelPicker = ({
  selectedIndex,
  onValueChange,
  lensFrequency,
  isLeftSelected
}: WheelPickerPropsType) => {
  return (
    <WheelPickerWrapper>
      <ScrollPicker
        key={isLeftSelected ? 'left' : 'right'}
        dataSource={lensFrequency}
        selectedIndex={selectedIndex}
        wrapperHeight={300}
        wrapperBackground="transparent"
        onValueChange={onValueChange}
        itemHeight={76}
        highlightColor="transparent"
        renderItem={(value: number, index: number) => {
          const isSelected = selectedIndex === index;
          return (
            <WheelPickerItem isSelected={isSelected}>
              <Font
                text={`${value === 0 ? '-0.00' : value.toFixed(2)}`}
                kind="semi28"
                color="black"
              />
            </WheelPickerItem>
          );
        }}
      />
      <FixedHighlightedBackground />
    </WheelPickerWrapper>
  );
};

const InfoBox = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${color.gray50};
  border-radius: 10px;
`;

const FrequenciesBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const OneFrequency = styled.View`
  flex-direction: column;
  align-items: start;
  gap: 9px;
`;

const ButtonBox = styled.View`
  width: 100%;
  padding: 0px 25px 13px;
  margin-top: auto;
`;

export default Frequency;
