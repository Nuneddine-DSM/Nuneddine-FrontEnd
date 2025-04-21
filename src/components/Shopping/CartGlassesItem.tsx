import styled from "styled-components/native";
import { Minus, Plus, X } from "../../assets";
import { Font, color } from "../../styles";
import { useState } from "react";
import CheckBox from "./CheckBox";

interface CartGlassesItemProps {
  checkedItems: { [id: string]: boolean };
  setCheckedItems: React.Dispatch<React.SetStateAction<{ [id: string]: boolean }>>;
}

const CartGlassesItem = ({ checkedItems, setCheckedItems }: CartGlassesItemProps) => {
  const [glasses] = useState([
    { id: 'glasses1', count: 1 },
    { id: 'glasses2', count: 1 }
  ]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const updateCount = (id: string, delta: number) => { };

  return (
    <>
      {glasses.map(item => (
        <ItemContainer key={item.id}>
          <CheckBox
            onPress={() => toggleItem(item.id)}
            selected={checkedItems[item.id] || false}
          />

          <ItemContent>
            <ProductInfoSection>
              <ProductImage />

              <ProductDetails>
                <TitleAndCounter>
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

                  <QuantityController>
                    <IconButton onPress={() => updateCount(item.id, -1)}>
                      <Minus size={14} color={color.gray600} />
                    </IconButton>
                    <QuantityDisplay>
                      <Font text={String(item.count)} kind="medium14" />
                    </QuantityDisplay>
                    <IconButton onPress={() => updateCount(item.id, 1)}>
                      <Plus size={14} color={color.gray600} />
                    </IconButton>
                  </QuantityController>

                </TitleAndCounter>
                <Font text="39,000원" kind="bold16" />
              </ProductDetails>
            </ProductInfoSection>

            <X size={30} />
          </ItemContent>
        </ItemContainer>
      ))}
    </>
  );
};


const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 30px 20px;
  border-bottom-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.white};
`;


const ItemContent = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const ProductInfoSection = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const ProductImage = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 4px;
  background-color: ${color.gray300};
`;

const ProductDetails = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleAndCounter = styled.View`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const TitleBlock = styled.View`
  width: 173px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const QuantityController = styled.View`
  display: flex;
  flex-direction: row;
`;

const IconButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray200};
`;

const QuantityDisplay = styled.View`
  padding: 2px 17px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`

export default CartGlassesItem