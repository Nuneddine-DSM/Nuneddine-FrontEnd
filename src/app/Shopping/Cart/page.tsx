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
import Amount from "../Common/Amount";
import CartGlassesItem from "../../../components/Shopping/CartGlassesItem";
import CartLensItem from "../../../components/Shopping/CartLensItem";

const Cart = () => {
  const [checkedGlassesItems, setCheckedGlassesItems] = useState<{ [id: string]: boolean }>({});
  const [checkedLensItems, setCheckedLensItems] = useState<{ [id: string]: boolean }>({});
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const currentCheckedItems = selectedTab === 1 ? checkedGlassesItems : checkedLensItems;
  const setCurrentCheckedItems = selectedTab === 1 ? setCheckedGlassesItems : setCheckedLensItems;

  const allIds = selectedTab === 1 ? ['glasses1', 'glasses2'] : ['lens1', 'lens2'];
  const isAllChecked = allIds.every(id => currentCheckedItems[id]);

  const toggleAll = () => {
    if (isAllChecked) {
      setCurrentCheckedItems(prev => {
        const newState = { ...prev };
        allIds.forEach(id => delete newState[id]);
        return newState;
      });
    } else {
      const newState: { [id: string]: boolean } = {};
      allIds.forEach(id => {
        newState[id] = true;
      });
      setCurrentCheckedItems(prev => ({ ...prev, ...newState }));
    }
  };

  return (
    <>
      <TopBar
        text="장바구니"
        leftIcon={<TouchableOpacity onPress={() => { }}><Arrow size={34} /></TouchableOpacity>}
      />
      <Container>
        <CartTabSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <SelectSection checked={isAllChecked} toggleAll={toggleAll} />
        <ProductCountSection
          count={
            selectedTab === 1
              ? Object.keys(checkedGlassesItems).length
              : Object.keys(checkedLensItems).length
          }
        />
        {selectedTab === 1 && (
          <CartGlassesItem
            checkedItems={checkedGlassesItems}
            setCheckedItems={setCheckedGlassesItems}
          />
        )}

        {selectedTab === 2 && (
          <CartLensItem
            checkedItems={checkedLensItems}
            setCheckedItems={setCheckedLensItems}
          />
        )}
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

const SelectSection = ({ checked, toggleAll }: { checked: boolean, toggleAll: () => void }) => (
  <SelectWrapper>
    <AllSelectWrapper>
      <CheckBox selected={checked} onPress={toggleAll} />
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
  flex-direction: column;
  background-color: ${color.gray50};
  padding-top: 62px;
  gap: 15px;
`;

const SelectWrapper = styled.View`
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${color.white};
`;

const AllSelectWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProductCountWrapper = styled.View`
  flex-direction: row;
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
