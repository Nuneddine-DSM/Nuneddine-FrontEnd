import { useState } from 'react';
import styled from 'styled-components/native';
import { TopBar, Input, AuthButton } from '../../components';
import { color, Font } from '../../styles';

const { Arrow } = require('../../assets/Arrow');

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <TopBarWrapper>
        <TopBar text="로그인" leftIcon={<Arrow />} />
        <TopBarDivider />
      </TopBarWrapper>
      <LoginBox>
        <TextBox>
          <Space height={46} />
          <Font text="눈에띠네를 시작해요!" kind="semi24" />
          <HighlightTextBox>
            <Font text="아이디와 비밀번호" kind="bold24" color="pink300" />
            <Font text="를" kind="semi24" />
          </HighlightTextBox>
          <Font text="입력해주세요." kind="semi24" />
        </TextBox>
        <InputBox>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            password={false}
            autoFocus={true}
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
          <AuthButton
            text="로그인"
            onPress={() => {
              console.log('로그인');
            }}
          />
        </ButtonBox>
      </LoginBox>
    </Container>
  );
}

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

const TopBarWrapper = styled.View`
  width: 100%;
  flex-direction: column;
`;

const TopBarDivider = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${color.pink300};
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

const HighlightTextBox = styled.View`
  width: 100%;
  flex-direction: row;
`;

export default Login;
