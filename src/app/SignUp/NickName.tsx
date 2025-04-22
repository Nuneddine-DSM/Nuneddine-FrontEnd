import styled from "styled-components/native"
import { SignUpPropsType } from "../../interface"
import { Controller } from 'react-hook-form';
import { Input } from "../../components";
import { Font } from "../../styles";
import { Text, View } from "react-native";

const NickName = ({ control }: SignUpPropsType) => {
  return (
    <Container>
      <Controller
        control={control}
        name="nickname"
        rules={{
          required: '닉네임을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z가-힣]+$/,
            message: '한국어로 입력해주세요.',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <ContentBox>
            <View>
              <Font text="어떻게 불러드릴까요?" kind="semi24" />
              <Text>
                <Font text="닉네임" color="pink300" kind="bold24" />
                <Font text="을 입력해주세요" kind="semi24" />
              </Text>
            </View>
            <Input
              onChangeText={onChange}
              value={value}
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
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

export default NickName