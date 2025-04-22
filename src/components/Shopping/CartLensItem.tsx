import styled from "styled-components/native";
import { color, Font } from "../../styles"
import CheckBox from "./CheckBox";
import { useState } from "react";
import { X } from "../../assets"
import Tag from "./Tag";
import { TouchableOpacity } from "react-native";

interface CartLensItemProps {
  checkedItems: { [id: string]: boolean };
  setCheckedItems: React.Dispatch<React.SetStateAction<{ [id: string]: boolean }>>;
  onPressOption: () => void;
}

const CartLensItem = ({ checkedItems, setCheckedItems, onPressOption }: CartLensItemProps) => {
  const [lens] = useState([
    { id: 'lens1', count: 1 },
    { id: 'lens2', count: 1 }
  ]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {lens.map(item => (
        <ItemContainer key={item.id}>
          <CheckBox
            onPress={() => toggleItem(item.id)}
            selected={checkedItems[item.id] || false}
          />

          <ItemContent>
            <ProductInfoSection>
              <ProductImage />
              <CartItemDetail>
                <TitleBlock>
                  <Font text="브랜드" kind="bold16" />
                  <Font
                    text="[안경 이름] 암튼 이름 겁나 김 뭐 mm 까지 나와있음..."
                    kind="medium16"
                    style={{ flexWrap: "wrap" }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  />
                </TitleBlock>

                <CategoryPriceBlock>
                  <Tag text="한달용" />
                  <Font text="12,000원" kind="bold16" />
                </CategoryPriceBlock>
              </CartItemDetail>
              <X />
            </ProductInfoSection>

            <OptionWrapper>
              <Font text="옵션 : 1개 / -1.00" color="gray600" kind="regular14" />
              <TouchableOpacity onPress={onPressOption}>
                <Font
                  text="옵션변경"
                  color="gray600"
                  kind="regular14"
                  style={{ textDecorationLine: 'underline' }}
                />
              </TouchableOpacity>
            </OptionWrapper>
          </ItemContent>
        </ItemContainer>
      ))}

    </>
  )
}

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 30px 20px;
  border-bottom-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.white};
`

const ItemContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ProductInfoSection = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`

const ProductImage = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 4px;
  background-color: ${color.gray300};
`

const CartItemDetail = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TitleBlock = styled.View`
  width: 161px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CategoryPriceBlock = styled.View`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

const OptionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 11px;
  border-radius: 4px;
  background-color: ${color.gray50};
`

export default CartLensItem