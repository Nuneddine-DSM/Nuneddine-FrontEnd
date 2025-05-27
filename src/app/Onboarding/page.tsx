import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { color, Font } from '../../styles';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const OnboardingImage = require('../../assets/OnboardingImage.png');

const Onboarding = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <BackgroundImage source={OnboardingImage}>
      <TextBox>
        <Font text="눈이 편해야 하루가 편하니까" kind="semi28" color="white" />
        <Font text="당신의 시야," kind="bold28" color="white" />
        <Font text="정성껏 챙겨드릴게요!" kind="semi28" color="white" />
      </TextBox>

      <ButtonWrapper>
        <Button
          text="로그인"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          text="회원가입"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          buttonColor="white"
          textColor="pink300"
        />
      </ButtonWrapper>
    </BackgroundImage>
  );
};

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resize-mode: cover;
  padding: 160px 20px 32px;
`;

const TextBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Onboarding;
