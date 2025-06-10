import styled from "styled-components/native";
import { color, Font } from "../../../styles"
import { Button } from "../../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const OrderComplete = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Container>
      <CompleteContent>
        <Image />
        <Font text="주문이 완료되었습니다!" kind="semi20" />
      </CompleteContent>
      <ButtonWrapper>
        <Button
          text="확인"
          onPress={() => navigation.navigate("Main")}
          buttonColor="black"
        />
      </ButtonWrapper>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

const CompleteContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`

const Image = styled.Image`
  width: 140px;
  height: 140px;
  background-color: ${color.gray300};
`

const ButtonWrapper = styled.View`
  padding: 7px 25px 16px;
`

export default OrderComplete;