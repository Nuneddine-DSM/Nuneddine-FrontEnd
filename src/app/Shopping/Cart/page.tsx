import { useState, useRef, useMemo, useCallback } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { TopBar, Dropdown } from "../../../components";
import { Arrow } from "../../../assets";
import { Font, color } from "../../../styles";
import { GlassesLensTab, CheckBox, CartGlassesItem, CartLensItem, QuantitySelector } from "../../../components/Shopping/index"
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { AuthButton } from "../../../components/Button";
import Lens from "./Lens";
import Amount from "../Common/Amount";

const Cart = () => {
  const [checkedGlassesItems, setCheckedGlassesItems] = useState<{ [id: string]: boolean }>({});
  const [checkedLensItems, setCheckedLensItems] = useState<{ [id: string]: boolean }>({});
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState("히히")

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['60%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" disappearsOnIndex={-1} appearsOnIndex={0} />,
    [],
  );

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
    <BottomSheetModalProvider>
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

        <View>
          {selectedTab === 2 && (
            <CartLensItem
              checkedItems={checkedLensItems}
              setCheckedItems={setCheckedLensItems}
              onPressOption={handlePresentModalPress}
            />
          )}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}
          >
            <OptionWrapper>
              <Font text="옵션 변경 / 모디쉬 1p 브라운" kind="medium16" color="gray600" />
              <InputWrapper>
                <CountInputWrapper>
                  <Font text="수량" kind="medium16" />
                  <QuantitySelector count={0} />
                </CountInputWrapper>
                <Dropdown
                  value={selectedOption}
                  setValue={setSelectedOption}
                  items={["0.00", "-2.25", "-5.00", "-7.25", "-10.00"]}
                />
              </InputWrapper>
            </OptionWrapper>
          </BottomSheetModal>
        </View>

        {selectedTab === 2 && <Lens />}
        <Amount />
        <PurchaseButton />
      </Container>
    </BottomSheetModalProvider>
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

const OptionWrapper = styled.View`
  flex-direction: column;
  padding: 47px 26px;
  gap: 26px;
`

const InputWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`

const CountInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${color.gray300};
  background-color: ${color.white};
`

export default Cart;
