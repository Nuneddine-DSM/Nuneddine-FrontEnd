import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { X } from "../../assets"
import { TouchableOpacity } from "react-native";
import { CartItemType } from "../../interface";
import CheckBox from "./CheckBox"
import Tag from "./Tag";

const CartLensItem = ({
  item,
  isSelected,
  count,
  onToggleSelect,
  onDelete,
  onCountChange,
  onOptionClick
}: {
  item: CartItemType;
  isSelected: boolean;
  count: number;
  onToggleSelect: () => void;
  onDelete: () => void;
  onCountChange: (newCount: number) => void;
  onOptionClick: (item: CartItemType) => void;
}) => {
  const formattedAmount = item.price.toLocaleString();

  return (
    <ItemContainer>
      <CheckBox onPress={onToggleSelect} selected={isSelected} />

      <ItemContent>
        <ProductInfoSection>
          <ProductImage src={item.image_urls[0]} />
          <CartItemDetail>
            <TitleBlock>
              <Font text={item.brand_name} kind="bold16" />
              <Font
                text={item.glass_name}
                kind="medium16"
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ flexWrap: "wrap" }}
              />
            </TitleBlock>

            <CategoryPriceBlock>
              <Tag text="한달용" />
              <Font text={`${formattedAmount}원`} kind="bold16" />
            </CategoryPriceBlock>
          </CartItemDetail>
          
          <TouchableOpacity onPress={onDelete}>
            <X size={30} />
          </TouchableOpacity>
        </ProductInfoSection>

        <OptionWrapper>
          <Font
            text={`옵션 : ${item.count}개 |  ${item.lens_power}`}
            color="gray600"
            kind="regular14"
          />
          <TouchableOpacity onPress={() => onOptionClick(item)}>
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
  )
}

export default CartLensItem;

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
