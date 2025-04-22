import styled from "styled-components/native";
import TopBar from "../../components/TopBar";
import { AuthButton } from "../../components";
import { color } from "../../styles"
import { Animated, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { Arrow } from "../../assets";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useForm } from 'react-hook-form';
import NickName from "./NickName";
import Password from "./Password";
import UserId from "./UserId";
import { getDeviceToken, signUpHandler } from "../../apis/user";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nickname: '',
      userId: '',
      password: '',
      passwordCheck: '',
    },
  });

  const navigation = useNavigation<StackNavigationProp<any>>();
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [page, setPage] = useState<number>(0);

  const signUpPage = [
    <NickName control={control} />,
    <UserId control={control} />,
    <Password control={control} />,
  ];

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (page + 1) * 20,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [page]);

  const prevPage = () => {
    if (page === 0) {
      navigation.goBack();
    } else {
      setPage(page - 1);
    }
  };

  const nextPage = handleSubmit(async data => {
    Keyboard.dismiss();

    if (page < signUpPage.length - 1) {
      setPage(page + 1);
    } else {
      try {
        await signUpHandler({
          name: data.nickname,
          id: data.userId,
          password: data.password,
        });

        reset();
        setPage(0);
        navigation.push('Login');
        console.log('회원가입 성공')
      } catch (error: any) {
        console.error('회원가입 실패', error);
      }
    }
  });

  return (
    <Container>
      <TopBar
        text="회원가입"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      <ProgressBar>
        <AnimatedProgress
          style={{
            width: progressAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </ProgressBar>

      <Content>
        {signUpPage[page]}
        <AuthButton text="다음" onPress={nextPage} />
      </Content>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${color.white};
`

const ProgressBar = styled.View`
  width: ${Dimensions.get('window').width};
  height: 2px;
  background-color: ${color.gray100};
  position: absolute;
  top: 64px;
`;

const AnimatedProgress = styled(Animated.View)`
  height: 3px;
  background-color: ${color.pink300};
`;

const Content = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 62px 25px 20px;
`

export default SignUp