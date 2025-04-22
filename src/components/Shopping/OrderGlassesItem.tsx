import styled from "styled-components/native";
import { Minus, Plus } from "../../assets";
import { Font, color } from "../../styles";
import { OrderItemsType } from "../../app/Shopping/Payment/data";

interface Props {
  item: OrderItemsType;
}

const OrderGlassesItem = ({ item }: Props) => {
  return (
    <ItemContainer>
      <ProductImage source={{ uri: item.image }} resizeMode="cover" />

      <ProductInfoSection>
        <TitleAndCounter>

          <TitleBlock>
            <Font text={item.name} kind="bold16" />
            <Font
              text={item.description}
              kind="medium16"
              style={{ flexWrap: "wrap" }}
              numberOfLines={2}
              ellipsizeMode="tail"
            />
          </TitleBlock>

          <QuantityController>
            <IconButton onPress={() => { }}>
              <Minus size={14} color={color.gray600} />
            </IconButton>
            <QuantityDisplay>
              <Font text={item.count} kind="medium14" />
            </QuantityDisplay>
            <IconButton onPress={() => { }}>
              <Plus size={14} color={color.gray600} />
            </IconButton>
          </QuantityController>

        </TitleAndCounter>
        
        <Font text={`${item.price}원`} kind="bold16" />
      </ProductInfoSection>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 18px 20px 30px;
  border-bottom-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.white};
`;

const ProductInfoSection = styled.View`
  width: 251px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductImage = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 4px;
  background-color: ${color.gray300};
`;

const TitleAndCounter = styled.View`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const TitleBlock = styled.View`
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

export default OrderGlassesItem