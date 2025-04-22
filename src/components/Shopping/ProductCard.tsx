import { useState } from "react";
import { Heart } from "../../assets"
import { Font, color } from "../../styles"
import Tag from "./Tag"
import styled from "styled-components/native";

const ProductCard = () => {
  const [selected, setSelected] = useState(false);

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage />
        <IconWrapper>
          <Heart
            size={30}
            color={color.gray500}
            fill={selected ? color.pink300 : "none"}
            onPress={() => setSelected(!selected)}
          />
        </IconWrapper>
      </ImageWrapper>

      <InfoWrapper>
        <TitleBox>
          <Font text="브랜드" kind="bold20" />
          <Font
            numberOfLines={2}
            ellipsizeMode="tail"
            text="베리스 레쥬렉션 선글라스 RESUR 베리스 레쥬렉션 선글라스 RESUR"
            kind="regular18"
          />
        </TitleBox>
        <Tag text="굵은태" />
        <Font text="99,000원" kind="bold18" />
      </InfoWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  width: 187px;
  flex-direction: column;
  gap: 12px;
  background-color: ${color.white};
`

const ImageWrapper = styled.View`
  position: relative;
  width: 187px;
  height: 187px;
  background-color: ${color.gray300};
`

const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`

const IconWrapper = styled.View`
  position: absolute;
  bottom: 12px;
  right: 12px;
`

const InfoWrapper = styled.View`
  flex-direction: column;
  gap: 14px;
`

const TitleBox = styled.View`
  flex-direction: column;
  gap: 7px;
`

export default ProductCard;
