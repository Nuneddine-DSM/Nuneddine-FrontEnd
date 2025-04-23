import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { TopBar } from "../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import OrderGlassesItem from "../../components/Shopping/OrderGlassesItem";
import { useNavigation } from "@react-navigation/native";

const OrderDetails = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TopBar
        text="주문내역"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <OrderSection>
        <DateWrapper>
          <Font text="2025.3.15" kind="bold24" />
        </DateWrapper>
        <OrderList>
          {/* <OrderGlassesItem /> */}
        </OrderList>
      </OrderSection>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`

const OrderSection = styled.View`
  padding: 15px 20px;
  background-color: ${color.white};
`

const DateWrapper = styled.View`
  padding: 8px 0;
`

const OrderList = styled.View`
  flex-direction: column;
`

export default OrderDetails