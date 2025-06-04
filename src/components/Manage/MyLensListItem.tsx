import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { Button } from '../Button';
import { MyLensItemData } from '../../apis/alarms';
import LinearGradient from 'react-native-linear-gradient';
import { LensDateTypeMap } from '../../app/Data';
import { useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { calculateDueDate, calculateProgress } from '../../utils/lens';

interface MyLensListItemProps {
  item: MyLensItemData;
  isExpended?: boolean;
  onButtonPress?: () => void;
  onExpendedPress?: () => void;
  onTogglePress?: () => void;
}

const MyLensListItem = ({
  item,
  isExpended,
  onButtonPress,
  onExpendedPress,
  onTogglePress
}: MyLensListItemProps) => {
  const [aniValue] = useState(new Animated.Value(0));

  const moveSwitchToggle = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 26]
  });

  useEffect(() => {
    Animated.timing(aniValue, {
      toValue: item.is_repurchased ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [item.is_repurchased, aniValue]);

  return (
    <Container
      disabled={!(item.start_time && item.end_time)}
      onPress={onExpendedPress}>
      {item.end_time && (
        <DueDateWrapper>
          <Font
            text={calculateDueDate(item.end_time)}
            kind="medium18"
            color="pink300"
          />
        </DueDateWrapper>
      )}
      <LensInfoText>
        <Font
          text={LensDateTypeMap[item.date_type]}
          kind="regular16"
          color="gray500"
        />
        <Font
          text={item.name}
          kind="semi20"
          numberOfLines={1}
          ellipsizeMode="tail"
        />
      </LensInfoText>
      {item.start_time && item.end_time ? (
        <UseLensPercentWrapper>
          <ProgressBarContainer>
            <ProgressBarFill
              width={`${calculateProgress(item.start_time, item.end_time)}%`}
              colors={[color.pink300, '#FF94C4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </ProgressBarContainer>
          <UseLensDate>
            <Font
              text={dateFormat(item.start_time)}
              kind="regular16"
              color="gray300"
            />
            <Font
              text={dateFormat(item.end_time)}
              kind="regular16"
              color="gray300"
            />
          </UseLensDate>
        </UseLensPercentWrapper>
      ) : (
        <Button text="START" buttonColor="black" onPress={onButtonPress} />
      )}
      {isExpended && item.end_time && (
        <View style={{ gap: 0 }}>
          <DetailInfoWrapper>
            <Font text="제품명" kind="semi16" />
            <Font text={item.name} kind="medium16" color="gray500" />
          </DetailInfoWrapper>
          <DetailInfoWrapper>
            <Font text="소비기한" kind="semi16" />
            <Font
              text={dateFormat(item.end_time)}
              kind="medium16"
              color="gray500"
            />
          </DetailInfoWrapper>
          <DetailInfoWrapper>
            <Font text="재구매 알림" kind="semi16" />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ToggleContainer
                onPress={onTogglePress}
                isOn={item.is_repurchased}>
                <ToggleWheel
                  style={[{ transform: [{ translateX: moveSwitchToggle }] }]}
                />
              </ToggleContainer>
            </View>
          </DetailInfoWrapper>
          <DeleteButton onPress={onButtonPress}>
            <Font text="삭제하기" kind="semi16" color="gray500" />
          </DeleteButton>
        </View>
      )}
    </Container>
  );
};

const dateFormat = (date: string) => {
  return date.replace(/-/g, '.');
};

const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  background-color: ${color.white};
  border-color: ${color.gray300};
  border-width: 1px;
  border-radius: 20px;
  gap: 15px;
  margin-bottom: 24px;
`;

const DueDateWrapper = styled.View`
  padding: 6px 12px;
  background-color: ${color.pink100};
  border-radius: 8px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const LensInfoText = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 5px;
`;

const UseLensPercentWrapper = styled.View`
  flex: 1;
  gap: 8px;
  flex-direction: column;
`;

const ProgressBarContainer = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${color.gray100};
  overflow: hidden;
`;

const ProgressBarFill = styled(LinearGradient)<{ width: string }>`
  height: 100%;
  width: ${({ width }) => width};
  border-radius: 5px;
`;

const UseLensDate = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

const DetailInfoWrapper = styled.View`
  width: 100%;
  padding: 22px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px;
  border-top-color: ${color.gray200};
  border-top-width: 1px;
`;

const ToggleContainer = styled.TouchableOpacity<{ isOn: boolean }>`
  width: 46px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${({ isOn }) => (isOn ? color.black : color.gray300)};
  padding: 1px;
`;

const ToggleWheel = styled(Animated.View)`
  width: 18px;
  height: 18px;
  background-color: ${color.white};
  border-radius: 50%;
`;

const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 0px;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  border-radius: 10px;
  border-color: ${color.gray300};
  border-width: 1px;
  margin-top: 10px;
`;

export default MyLensListItem;
