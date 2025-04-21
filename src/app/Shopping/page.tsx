import styled from "styled-components/native";
import TopBar from "../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import { Font, color } from "../../styles";
import GlassesLensTab from "../../components/Shopping/GlassesLensTab";
import CheckBox from "../../components/Shopping/CheckBox";
import { useState } from "react";
import { AuthButton } from "../../components/Button";
import Lens from "./Lens";
import Glasses from "./Glasses";
import Amount from "./Amount/page";

const Cart = () => {
  const [checked, setChecked] = useState<boolean>(true)
  const [selectedTab, setSelectedTab] = useState<number>(1);

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
        <>
          <GlassesLensTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <SelectWrapper>
            <AllSelectWrapper>
              <CheckBox
                onPress={() => setChecked(!checked)}
                selected={checked}
              />
              <Font text="전체 선택" kind="medium16" />
            </AllSelectWrapper>
            <Font text="선택 선택" kind="medium16" />
          </SelectWrapper>

          <ProductCountWrapper>
            <Font text="1개의 상품이 있습니다." kind="medium16" />
          </ProductCountWrapper>

          {selectedTab === 1 ? <Glasses /> : <Lens />}
        </>

        <Amount />

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



const ButtonWrapper = styled.View`
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`

export default Cart