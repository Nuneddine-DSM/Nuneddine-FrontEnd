import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { Button } from '../Button';
import { MyLensItemData } from '../../apis/alarms';
import LinearGradient from 'react-native-linear-gradient';
import { LensDateTypeMap } from '../../app/Data';

interface MyLensListItmeProps {
  item: MyLensItemData;
  onPress?: () => void;
}

const MyLensListItem = ({ item, onPress }: MyLensListItmeProps) => {
  return (
    <Container>
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
        <UseLensPersentWrapper>
          <ProgressBarContainer>
            <ProgressBarFill
              width={`${calculateProgress(item.start_time, item.end_time)}%`}
              colors={[color.pink300, '#FF94C4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </ProgressBarContainer>
          <UseLensDate>
            <Font text={item.start_time} kind="regular16" color="gray300" />
            <Font text={item.end_time} kind="regular16" color="gray300" />
          </UseLensDate>
        </UseLensPersentWrapper>
      ) : (
        <Button text="START" buttonColor="black" onPress={onPress} />
      )}
    </Container>
  );
};

const calculateDueDate = (endDate: string) => {
  const targeDate = new Date(endDate);
  const today = new Date();

  targeDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = targeDate.getTime() - today.getTime();
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDay === 0) {
    return 'D-Day';
  } else if (diffDay > 0) {
    return `D-${diffDay}`;
  } else {
    `D+${Math.abs(diffDay)}`;
  }
};

const calculateProgress = (startDateStr: string, endDateStr: string) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const today = new Date();

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsed = today.getTime() - startDate.getTime();

  if (totalDuration <= 0) {
    return 100;
  }
  if (elapsed <= 0) {
    return 0;
  }

  const progress = (elapsed / totalDuration) * 100;

  return Math.min(100, Math.floor(progress));
};

const Container = styled.View`
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

const UseLensPersentWrapper = styled.View`
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

export default MyLensListItem;
