import styled from "styled-components/native";
import { Font, color } from "../../styles"

interface AmountProps {
  orderAmount?: number,
  deliveryAmount?: number,
  last?: boolean
}

const Amount = ({
  orderAmount = 0,
  deliveryAmount = 0,
  last = false
}: AmountProps) => {

  const formattedOrderAmount = orderAmount.toLocaleString();
  const formattedDeliveryAmount = deliveryAmount.toLocaleString();
  const formattedTotal = (orderAmount + deliveryAmount).toLocaleString();

  return (
    <TotalAmountWrapper>
      <TotalWrapper>
        <Font text="총 주문 금액" color="gray600" kind="semi18" />
        <Font text={`${formattedOrderAmount}원`} kind="medium18" />
      </TotalWrapper>
      <TotalWrapper>
        <Font text="총 배송비" color="gray600" kind="semi18" />
        <Font
          text={deliveryAmount === 0 ? `무료배송` : `${formattedDeliveryAmount}원`}
          kind="medium18"
          color="pink200"
        />
      </TotalWrapper>

      <Line></Line>

      <TotalWrapper>
        <Font text="총 결제 금액" color={last ? "pink300" : "gray600"} kind="semi18" />
        <Font text={`${formattedTotal}원`} kind="medium20" color={last ? "pink300" : "black"} />
      </TotalWrapper>
    </TotalAmountWrapper>
  )
}

const TotalAmountWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 40px 20px;
  border-top-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.gray50};
`

const TotalWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.gray300};
`

export default Amount