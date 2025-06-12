import styled from "styled-components/native";
import Tag from "./Tag";
import { Heart } from "../../assets";
import { useState, useEffect } from "react";
import { ShoppingContentType } from "../../app/Main/interface";
import { Font, color } from "../../styles";
import { likeHandler } from "../../apis/heart";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

/**
 * 상품 카드 작은 버전
 */

const ProductCardSmall = ({ shopId, image, title, describe, tag, price, isLiked }: ShoppingContentType) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selected, setSelected] = useState(isLiked);

  useEffect(() => {
    setSelected(isLiked);
    console.log("isLiked:", isLiked);
  }, [isLiked]);

  const heartHandler = async () => {
    try {
      await likeHandler(shopId);
      setSelected(prev => !prev);
    } catch (error) {
      console.log('좋아요 실패', error);
    }
  }

  return (
    <CardContainer onPress={() => navigation.navigate("ShoppingDetail", { shopId })}>
      <ImageWrapper>
        <ProductImage source={{ uri: image }} resizeMode="cover" />
        <IconWrapper>
          <Heart
            size={20}
            color={selected ? color.pink300 : color.gray500}
            fill={selected ? color.pink300 : 'none'}
            onPress={heartHandler}
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

const CardContainer = styled.TouchableOpacity`
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