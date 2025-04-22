import styled from "styled-components/native";
import { color } from "../../styles"
import { AuthButton, TopBar } from "../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import DeliveryDetail from "../../components/Shopping/Delivery"
import { ScrollView } from "react-native-gesture-handler";

const Delivery = () => {
  return (
    <Container>
      <TopBar
        text="배송지 관리"
        leftIcon={
          <TouchableOpacity onPress={() => { }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <DeliveryListWrapper>
          <DeliveryDetail />
          <DeliveryDetail />
          <DeliveryDetail />
        </DeliveryListWrapper>
      </ScrollView>

      <ButtonWrapper>
        <AuthButton text="배송지 추가" />
      </ButtonWrapper>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`

const DeliveryListWrapper = styled.View`
  flex-direction: column;
  padding: 35px 20px;
  gap: 16px;
`

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`

export default Delivery