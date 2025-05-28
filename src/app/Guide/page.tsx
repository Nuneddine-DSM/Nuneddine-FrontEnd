import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { getGuides } from '../../apis/guids';
import { useQuery } from '@tanstack/react-query';
import { GuideItemType } from '../../interface';

const QuestionIcon = require('../../assets/Question.png');

const Guide = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const { data } = useQuery({
    queryKey: [getGuides],
    queryFn: getGuides
  });

  return (
    <Container>
      <TopBar
        text="가이드"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <GuideListWrapper>
          {data &&
            data.map((item: GuideItemType) => (
              <GuideItem onPress={() => navigation.navigate('GuideDetail')}>
                <GuideImage></GuideImage>
                <InfoWrapper>
                  <Font
                    text="기초 지식 안내 TIP"
                    kind="medium16"
                    color="gray400"
                  />
                  <Font
                    text={item.title}
                    kind="bold24"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  />
                </InfoWrapper>
              </GuideItem>
            ))}
        </GuideListWrapper>

        <QuestionContent>
          <Font text="자주 묻는 질문 (FAQ)" kind="bold24" />

          <QuestionListWrapper>
            <QuestionItem>
              <TitleWrapper>
                <QuestionImage source={QuestionIcon} />
                <Font
                  text="렌즈를 잃어버렸을 때 대처 방법"
                  kind="medium16"
                  color="gray600"
                />
              </TitleWrapper>
              <Arrow size={20} color={color.gray600} rotate="bottom" />
            </QuestionItem>
          </QuestionListWrapper>
        </QuestionContent>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`;

const GuideListWrapper = styled.View`
  flex-direction: column;
  background-color: ${color.white};
`;

const GuideItem = styled.TouchableOpacity`
  padding: 14px 20px;
`;

const GuideImage = styled.View`
  width: 100%;
  height: 145px;
  border-radius: 20px;
  background-color: ${color.gray200};
`;

const InfoWrapper = styled.View`
  flex-direction: column;
  padding: 20px 7px;
  gap: 7px;
`;

const QuestionContent = styled.View`
  flex-direction: column;
  padding: 24px 20px 72px;
  gap: 25px;
  background-color: ${color.white};
`;

const QuestionListWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const QuestionItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.gray50};
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const QuestionImage = styled.Image`
  width: 24px;
  height: 18px;
`;

export default Guide;
