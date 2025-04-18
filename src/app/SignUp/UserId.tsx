import { SignUpPropsType } from "../../interface"
import styled from "styled-components/native"
import { Controller } from "react-hook-form"
import { View, Text } from "react-native"
import { Font } from "../../styles"
import { Input } from "../../components"

const UserId = ({ control }: SignUpPropsType) => {
  return (
    <Container>
      <Controller
        control={control}
        name="userId"
        rules={{
          required: '아이디를 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9]{4,20}$/,
            message: '아이디는 4~20자의 영어 대소문자 또는 숫자만 가능합니다.',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <ContentBox>
            <View>
              <Font text="계정의 시작을 준비해요!" kind="semi24" />
              <Text>
                <Font text="아이디" color="pink300" kind="bold24" />
                <Font text="를 입력해주세요" kind="semi24" />
              </Text>
            </View>
            <Input
              onChangeText={onChange}
              value={value}
              label="아이디"
              placeholder="아이디를 입력해주세요."
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

export default UserId