import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import CheckBox from './CheckBox';
import { X } from '../../assets';
import QuantitySelector from './QuantitySelector';
import { CartItemType } from '../../interface';
import { TouchableOpacity } from 'react-native';

const CartGlassesItem = ({
  item,
  isSelected,
  count,
  onToggleSelect,
  onDelete,
  onCountChange
}: {
  item: CartItemType;
  isSelected: boolean;
  count: number;
  onToggleSelect: () => void;
  onDelete: () => void;
  onCountChange: (newCount: number) => void;
}) => {
  const formattedAmount = item.price.toLocaleString();

  return (
    <ItemContainer>
      <CheckBox onPress={onToggleSelect} selected={isSelected} />

      <ItemContent>
        <ProductInfoSection>
          <ProductImage src={item.image_urls[1]} />

          <ProductDetails>
            <TitleAndCounter>
              <TitleBlock>
                <Font text={item.brand_name} kind="bold16" />
                <Font
                  text={item.glass_name}
                  kind="medium16"
                  style={{ flexWrap: 'wrap' }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                />
              </TitleBlock>

              <QuantitySelector count={count} onChange={onCountChange} />
            </TitleAndCounter>
            <Font text={`${formattedAmount}원`} kind="bold16" />
          </ProductDetails>
        </ProductInfoSection>

        <TouchableOpacity onPress={onDelete}>
          <X size={30} />
        </TouchableOpacity>
      </ItemContent>
    </ItemContainer>
  );
};

export default CartGlassesItem;

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
