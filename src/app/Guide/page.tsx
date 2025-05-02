import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const QuestionIcon = require("../../assets/Question.png")

const Guide = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Container>
      <TopBar
        text="주문내역"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <GuideListWrapper>
        <GuideItem>
          <GuideImage></GuideImage>
          <InfoWrapper>
            <Font text="기초 지식 안내 TIP" kind="medium16" color="gray400" />
            <Font
              text="렌즈는 어떻게 나뉘고, 각각 어떤 특징을 가질까?"
              kind="bold24"
              numberOfLines={2}
              ellipsizeMode="tail"
            />
          </InfoWrapper>
        </GuideItem>
      </GuideListWrapper>

      <QuestionContent>
        <Font text="자주 묻는 질문 (FAQ)" kind="bold24" />

        <QuestionListWrapper>
          <QuestionItem>
            <TitleWrapper>
              <QuestionImage source={QuestionIcon} />
              <Font text="렌즈를 잃어버렸을 때 대처 방법" kind="medium16" color="gray600" />
            </TitleWrapper>
            <Arrow size={20} color={color.gray600} rotate="bottom" />
          </QuestionItem>
        </QuestionListWrapper>
        
      </QuestionContent>
    </Container >
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`

const GuideListWrapper = styled.View`
  flex-direction: column;
  background-color: ${color.white};
`

const GuideItem = styled.View`
  padding: 14px 20px;
`

const GuideImage = styled.View`
  width: 100%;
  height: 145px;
  border-radius: 20px;
  background-color: ${color.gray200};
`

const InfoWrapper = styled.View`
  flex-direction: column;
  padding: 20px 7px;
  gap: 7px;
`

const QuestionContent = styled.View`
  flex-direction: column;
  padding: 24px 20px 72px;
  gap: 25px;
  background-color: ${color.white};
`

const QuestionListWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`

const QuestionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.gray50};
`

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

const QuestionImage = styled.Image`
  width: 24px;
  height: 18px;
`

export default Guide