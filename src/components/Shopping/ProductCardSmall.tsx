import styled from "styled-components/native";
import { Heart } from "../../assets";
import Tag from "./Tag";
import { useState } from "react";
import { ShoppingContentType } from "../../app/Main/interface";
import { Font, color } from "../../styles";

/**
 * 상품 카드 작은 버전
 */

const ProductCardSmall = ({ image, title, describe, tag, price }: ShoppingContentType) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage source={{ uri: image }} resizeMode="cover" />
        <IconWrapper>
          <Heart
            size={20}
            color={color.gray500}
            fill={selected ? color.pink300 : 'none'}
            onPress={() => setSelected(prev => !prev)}
          />
        </IconWrapper>
      </ImageWrapper>

      <InfoWrapper>
        <TitleBox>
          <Font text={title} kind="bold16" />
          <Font
            text={describe}
            kind="regular16"
            numberOfLines={2}
            ellipsizeMode="tail"
          />
        </TitleBox>

        <Tag text={tag} />

        <Font text={`${price.toLocaleString()}원`} kind="bold16" />
      </InfoWrapper>
    </CardContainer>
  )
}

const CardContainer = styled.View`
  width: 125px;
  flex-direction: column;
  gap: 8px;
  background-color: ${color.white};
`

const ImageWrapper = styled.View`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background-color: ${color.gray200};
`

const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`

const IconWrapper = styled.View`
  position: absolute;
  bottom: 8px;
  right: 8px;
`

const InfoWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`

const TitleBox = styled.View`
  flex-direction: column;
  gap: 6px;
`

export default ProductCardSmall