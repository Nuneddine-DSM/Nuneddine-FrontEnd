import styled from "styled-components/native";
import { color, Font } from "../../../styles"
import { AuthButton, Input, TopBar } from "../../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../../assets";
import { useNavigation } from "@react-navigation/native";

const Add = () => {
  const navigation = useNavigation();

  return (
    <AddAddressContainer>
      <TopBar
        text="배송지 관리"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <FormWrapper>
        <FormSection>
          <Font text="주소" kind="semi16" color="gray600" />
          <RowInputWrapper>
            <Input
              width="280px"
              placeholder="우편번호를 입력해주세요."
            />
            <AuthButton text="찾기" width="80px" />
          </RowInputWrapper>
          <Input
            placeholder="주소지를 입력해주세요."
          />
          <Input
            placeholder="상세주소를 입력해주세요."
          />
        </FormSection>

        <FormSection>
          <Font text="배송지명" kind="semi16" color="gray600" />
          <Input
            placeholder="집, 회사 등 배송지명을 입력해주세요."
          />
        </FormSection>

        <FormSection>
          <Font text="수령인" kind="semi16" color="gray600" />
          <Input
            placeholder="이름을 입력해주세요."
          />
        </FormSection>

        <FormSection>
          <Font text="전화번호" kind="semi16" color="gray600" />
          <Input
            placeholder="전화번호를 입력해주세요."
          />
        </FormSection>
      </FormWrapper>

      <ButtonWrapper>
        <AuthButton text="저장하기" />
      </ButtonWrapper>
    </AddAddressContainer >
  )
}

const AddAddressContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 24px;
  padding-top: 62px;
  background-color: ${color.white};
`

const FormWrapper = styled.View`
  padding: 50px 20px;
  flex-direction: column;
  gap: 24px;
`

const FormSection = styled.View`
  flex-direction: column;
  gap: 8px;
`

const RowInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background-color: ${color.white};
`

export default Add