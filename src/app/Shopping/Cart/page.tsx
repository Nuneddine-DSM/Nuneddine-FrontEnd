import styled from "styled-components/native";
import TopBar from "../../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../../assets";
import { Font, color } from "../../../styles";
import GlassesLensTab from "../../../components/Shopping/GlassesLensTab";
import CheckBox from "../../../components/Shopping/CheckBox";
import { useState } from "react";
import { AuthButton } from "../../../components/Button";
import Lens from "./Lens";
import Amount from "../Amount/page";
import CartGlassesItem from "../../../components/Shopping/CartGlassesItem";
import CartLensItem from "../../../components/Shopping/CartLensItem";

const Cart = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<number>(1);

  return (
    <>
      <TopBar
        text="장바구니"
        leftIcon={<TouchableOpacity onPress={() => { }}><Arrow size={34} /></TouchableOpacity>}
      />
      <Container>
        <CartTabSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <SelectSection checked={checked} />
        <ProductCountSection count={1} />
        {selectedTab === 1 ? <CartGlassesItem /> : <CartLensItem />}
        {selectedTab === 2 && <Lens />}
        <Amount />
        <PurchaseButton />
      </Container>
    </>
  );
};

const CartTabSection = ({ selectedTab, setSelectedTab }: { selectedTab: number, setSelectedTab: (tab: number) => void }) => (
  <>
    <GlassesLensTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
  </>
);

const SelectSection = ({ checked }: { checked: boolean }) => (
  <SelectWrapper>
    <AllSelectWrapper>
      <CheckBox selected={checked} />
      <Font text="전체 선택" kind="medium16" />
    </AllSelectWrapper>
    <Font text="선택 삭제" kind="medium16" />
  </SelectWrapper>
);

const ProductCountSection = ({ count }: { count: number }) => (
  <ProductCountWrapper>
    <Font text={`${count}개의 상품이 있습니다.`} kind="medium16" />
  </ProductCountWrapper>
);

const PurchaseButton = () => (
  <ButtonWrapper>
    <AuthButton text="상품 구매하기" />
  </ButtonWrapper>
);

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 64,
  },
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
`;

const AllSelectWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProductCountWrapper = styled.View`
  padding: 10px 20px 12px;
  background-color: ${color.white};
`;

const ButtonWrapper = styled.View`
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`;

export default Cart;
