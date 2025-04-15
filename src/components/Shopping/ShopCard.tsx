import styled from "styled-components/native";
import { Heart } from "../../assets";
import Tag from "./Tag";
import { useState } from "react";

const ShopCard = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage />
        <IconWrapper>
          <Heart
            size={20}
            color="black"
            fill={selected ? 'pink' : 'none'}
            onPress={() => setSelected(!selected)}
          />
        </IconWrapper>
      </ImageWrapper>

      <InfoWrapper>
        <TitleBox>
          <BoldText>브랜드</BoldText>
          <ProductTitle
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            베리스 레쥬렉션 선글라스 RESUR 베리스 레쥬렉션 선글라스 RESUR
          </ProductTitle>
        </TitleBox>


        <Tag text="굵은태" />

        <BoldText>99,000원</BoldText>
      </InfoWrapper>
    </CardContainer>
  )
}

const CardContainer = styled.View`
  width: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
`

const ImageWrapper = styled.View`
  position: relative;
  width: 125px;
  height: 125px;
  padding: 8px;
  background-color: gray;
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TitleBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const BoldText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`

const ProductTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
`

export default ShopCard