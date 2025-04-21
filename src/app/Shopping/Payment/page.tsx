import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { Input, TopBar } from "../../../components";
import CartGlassesItem from "../../../components/Shopping/CartGlassesItem";
import { AuthButton } from "../../../components";
import Amount from "../Common/Amount";
import PaymentMethod from "./PaymentMethod";

const Payment = () => {
  return (
    <>
      <TopBar text="장바구니/결제" />

      <Container>
        <DeliveryInfo>
          <DeliveryHeader>
            <RequiredTitle>
              <Font text="배송지 정보" kind="bold20" />
              <Font text="*" kind="bold20" color="pink300" />
            </RequiredTitle>
            <Font text="배송지 변경" kind="medium16" color="pink300" />
          </DeliveryHeader>

          <DeliverySection>
            <Tag>
              <Font text="기숙사" kind="semi14" />
            </Tag>
            <NamePhoneNumber>
              <Font text="박예빈" kind="medium18" />
              <Font text="･" kind="medium18" />
              <Font text="010-1234-5678" kind="medium18" />
            </NamePhoneNumber>
            <Font text="대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)" kind="regular16" color="gray600" />
            <Input placeholder="배송시 요청사항을 입력해주세요" />
          </DeliverySection>
        </DeliveryInfo>

        <OrderItemList>
          <ItemHeader>
            <Font text="주문 상품" kind="bold20" />
          </ItemHeader>
          <>
            <CartGlassesItem />
            <CartGlassesItem />
          </>
        </OrderItemList>

        <PaymentMethod />

        <Amount />

        <ButtonWrapper>
          <AuthButton text="상품 구매하기" />
        </ButtonWrapper >
      </Container >
    </>
  )
}

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 64
  }
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`

const DeliveryInfo = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`

const DeliveryHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
`

const RequiredTitle = styled.View`
  display: flex;
  flex-direction: row;
`

const DeliverySection = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 20px;
`

const Tag = styled.Text`
  padding: 4px 15px;
  border-width: 1px;
  border-radius: 30px;
  align-self: flex-start;
`

const NamePhoneNumber = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

const OrderItemList = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`

const ItemHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 18px 20px;
`

const ButtonWrapper = styled.View`
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`

export default Payment