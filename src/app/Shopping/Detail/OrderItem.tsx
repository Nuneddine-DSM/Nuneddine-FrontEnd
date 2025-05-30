import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { X } from "../../../assets"
import { QuantitySelector } from "../../../components/Shopping";

interface PropsType {
  id?: number,
  productName?: string,
  price?: number
}

const OrderItem = ({ id, productName, price = 0 }: PropsType) => {
  return (
    <OrderItemContainer>
      <ProductInfoWrapper>
        <ProductNameBox>
          <Font
            text={productName}
            kind="bold16"
            numberOfLines={2}
            ellipsizeMode="tail"
          />
        </ProductNameBox>
        <X size={30} />
      </ProductInfoWrapper>
      <QuantityAndPriceWrapper>
        <QuantitySelector productId={id || 0} />
        <Font text={`${(price * optionCount).toLocaleString()}원`} kind="bold18" />
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