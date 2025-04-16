import { SignUpPropsType } from "../../interface"
import styled from "styled-components/native"
import { Controller } from "react-hook-form"
import { View, Text } from "react-native"
import { Font } from "../../styles"
import { Input } from "../../components"

const Password = ({ control }: SignUpPropsType) => {
  return (
    <Container>
      <Controller
        control={control}
        name="password"
        rules={{
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
            message: '영문, 숫자, 특수문자(!@#$%^&*)를 포함한 8~20자로 입력해주세요.',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <ContentBox>
            <View>
              <Font text="계정의 시작을 준비해요!" kind="semi24" />
              <Text>
                <Font text="비밀번호" color="pink300" kind="bold24" />
                <Font text="를 입력해주세요" kind="semi24" />
              </Text>
            </View>
            <Input
              onChangeText={onChange}
              value={value}
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              password
            />
          </ContentBox>
        )}
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  padding: 58px 0;
`

const ContentBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 58px;
`

export default Password