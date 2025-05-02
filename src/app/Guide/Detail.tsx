import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const QuestionIcon = require("../../assets/Question.png")

const GuideDetail = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

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
        <GuideImage></GuideImage>

        <GuideContent>
          <TitleWrapper>
            <QuestionImage source={QuestionIcon} resizeMode="cover" />
            <Font text="안경 바꾸는 주기는 어떻게 될까?" kind="extraBold20" />
          </TitleWrapper>
          <Description></Description>
        </GuideContent>
      </ScrollView>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.white};
`

const GuideImage = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${color.gray100};
`

const GuideContent = styled.View`
  flex-direction: column;
  padding: 34px 20px 52px;
  gap: 28px;
`

const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

const QuestionImage = styled.Image`
  width: 28px;
  height: 22px;
`

const Description = styled.View`
  width: 100%;
  height: 500px;
  background-color: ${color.gray100};
`

export default GuideDetail