import styled from "styled-components/native";
import TopBar from "../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import { Font, color } from "../../styles";
import GlassesLensTab from "../../components/Shopping/GlassesLensTab";
import CartGlassesItem from "../../components/Shopping/CartGlassesItem";
import CheckBox from "../../components/Shopping/CheckBox";
import { useState } from "react";
import { AuthButton } from "../../components/Button";
import { ScrollView } from "react-native";

const Cart = () => {
  const [select, setSelect] = useState<boolean>(true)

  return (
    <>
      <TopBar
        text="장바구니"
        leftIcon={
          <TouchableOpacity onPress={() => { }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <Container>
        <GlassesLensTab />

        <SelectWrapper>
          <AllSelectWrapper>
            <CheckBox
              onPress={() => setSelect(!select)}
              selected={select}
            />
            <Font text="전체 선택" kind="medium16" />
          </AllSelectWrapper>
          <Font text="선택 선택" kind="medium16" />
        </SelectWrapper>

        <ProductCountWrapper>
          <Font text="1개의 상품이 있습니다." kind="medium16" />
        </ProductCountWrapper>

        <ProductListWrapper>
          <CartGlassesItem />
          <CartGlassesItem />
        </ProductListWrapper>

        <TotalAmountWrapper>
          <TotalWrapper>
            <Font text="총 주문 금액" color="gray600" kind="semi18" />
            <Font text="78,000원" kind="medium18" />
          </TotalWrapper>
          <TotalWrapper>
            <Font text="총 배송비" color="gray600" kind="semi18" />
            <Font text="무료배송" color="pink200" kind="medium18" />
          </TotalWrapper>

          <Line></Line>

          <TotalWrapper>
            <Font text="총 결제 금액" color="gray600" kind="semi18" />
            <Font text="78,000원" kind="medium20" />
          </TotalWrapper>
        </TotalAmountWrapper>

        <ButtonWrapper>
          <AuthButton text="상품 구매하기" />
        </ButtonWrapper>

      </Container>
    </>
  )
}

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 64
  },
}))`
  flex: 1;
  background-color: ${color.gray50};
  padding-top: 62px;
`;
const SelectWrapper = styled.View`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${color.white};
`

const AllSelectWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

`

const ProductCountWrapper = styled.View`
  padding: 10px 20px 12px;
  background-color: ${color.white};
`

const ProductListWrapper = styled.View`
  display: flex;
  flex-direction: column;
`

const TotalAmountWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 40px 20px;
  border-top-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.gray50};
  margin-bottom: 150px;
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

const ButtonWrapper = styled.View`
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`

export default Cart