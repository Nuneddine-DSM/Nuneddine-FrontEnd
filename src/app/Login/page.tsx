import { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { TopBar, Input, Button } from '../../components';
import { color, Font } from '../../styles';
import { Arrow } from '../../assets/Arrow';
import { loginHandler, LoginRequest } from '../../apis/auth';
import { Alert, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { Text, View } from 'react-native';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const prevPage = () => {
    navigation.goBack();
  };

  const login = async () => {
    try {
      setLoading(true);
      const requestData: LoginRequest = {
        account_id: id,
        password: password,
        device_token: ''
      };
      const response = await loginHandler(requestData);

      if (response.status === 200) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'NavBar' }]
          })
        );
      } else {
        Alert.alert('아이디 또는 비밀번호를 잘못입력하였습니다.');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('AxiosError', err);
        if (err.response?.status === 401) {
          Alert.alert('아이디 또는 비밀번호를 잘못입력하였습니다');
        } else {
          Alert.alert('로그인 중 오류가 발생하였습니다');
        }
      } else {
        console.error('else', err);
        Alert.alert('로그인 중 오류가 발생하였습니다');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBar
        text="로그인"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <TopBarDivider />
      <LoginBox>
        <TextBox>
          <View>
            <Font text="눈에띠네를 시작해요!" kind="semi24" />
            <Text>
              <Font text="아이디와 비밀번호" kind="bold24" color="pink300" />
              <Font text="를" kind="semi24" />
            </Text>
            <Font text="입력해주세요." kind="semi24" />
          </View>
        </TextBox>
        <InputBox>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            password={false}
            autoFocus={false}
            value={id}
            multiline={false}
            readonly={false}
            onChangeText={setId}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            password={true}
            autoFocus={false}
            value={password}
            multiline={false}
            readonly={false}
            onChangeText={setPassword}
          />
        </InputBox>
        <ButtonBox>
          <Button
            text="로그인"
            onPress={() => {
              if (!id || !password) {
                Alert.alert('아이디나 비밀번호를 입력해주세요');
              } else if (!loading) {
                login();
              }
            }}
            loading={loading}
          />
        </ButtonBox>
      </LoginBox>
    </Container>
  );
};

const Space = styled.View<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
`;

const Container = styled.View`
  flex: 1;
  padding: 0px;
  flex-direction: column;
  background-color: ${color.white};
`;

const TopBarDivider = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${color.pink300};
  padding-top: 64px;
`;

const LoginBox = styled.View`
  flex: 1;
  width: 100%;
  gap: 45px;
  justify-content: flex-start;
`;

const InputBox = styled.View`
  width: 100%;
  padding: 0px 25px;
  gap: 25px;
  flex-direction: column;
`;

const ButtonBox = styled.View`
  width: 100%;
  padding: 0px 25px 20px 25px;
  margin-top: auto;
`;

const TextBox = styled.View`
  width: 100%;
  padding: 59px 25px 0px 25px;
`;

export default Login;
