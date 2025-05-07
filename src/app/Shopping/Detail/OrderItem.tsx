import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { X } from "../../../assets"
import { QuantitySelector } from "../../../components/Shopping";

const OrderItem = () => {
  return (
    <OrderItemContainer>
      <ProductInfoWrapper>
        <ProductNameBox>
          <Font
            text="베리스 레쥬렉션 선글라스 RESURER 어쩌고저쩌고 아무튼 대다 김"
            kind="bold16"
            numberOfLines={2}
            ellipsizeMode="tail"
          />
        </ProductNameBox>
        <X size={30} />
      </ProductInfoWrapper>
      <QuantityAndPriceWrapper>
        <QuantitySelector />
        <Font text="99,000원" kind="bold18" />
      </QuantityAndPriceWrapper>
    </OrderItemContainer>
  )
}

const OrderItemContainer = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 20px;
  gap: 22px;
  border-radius: 8px;
  background-color: ${color.gray50};
`

const ProductInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 7px;
`

const ProductNameBox = styled.View`
  flex: 1;
`

const QuantityAndPriceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default OrderItem