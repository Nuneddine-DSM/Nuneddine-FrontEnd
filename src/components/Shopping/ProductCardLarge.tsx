import { useState } from "react";
import { Heart } from "../../assets"
import { Font, color } from "../../styles"
import styled, { ThemeProvider, DefaultTheme } from "styled-components/native";
import { ShoppingContentType } from "../../app/Main/interface";
import Tag from "./Tag"
import { NavigationProp, useNavigation } from "@react-navigation/native";

/**
 * 상품 카드 큰 버전
 */

export const lightTheme: DefaultTheme = {
  background: "white",
  text: "black",
};

export const darkTheme: DefaultTheme = {
  background: "black",
  text: "white",
};

interface CardPropsType extends ShoppingContentType {
  isDarkMode?: boolean;
}

const ProductCardLarge = ({
  shopId,
  image,
  title,
  describe,
  tag,
  price,
  isDarkMode = false,
}: CardPropsType) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const theme = isDarkMode ? darkTheme : lightTheme;
  const [selected, setSelected] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CardContainer key={shopId} background={theme.background} onPress={() => navigation.navigate("ShoppingDetail", { shopId })}>
        <ImageWrapper>
          <ProductImage source={{ uri: image }} />
          <IconWrapper>
            <Heart
              size={30}
              color={color.gray500}
              fill={selected ? color.pink300 : "none"}
              onPress={() => setSelected(prev => !prev)}
            />
          </IconWrapper>
        </ImageWrapper>

        <InfoWrapper>
          <TitleBox>
            <Font
              text={title}
              kind="bold20"
              color={theme.text}
            />
            <Font
              text={describe}
              kind="regular18"
              color={theme.text}
              numberOfLines={2}
              ellipsizeMode="tail"
            />
          </TitleBox>

          <Tag text={tag} isDark={isDarkMode} />

          <Font
            text={`${price ? Number(price).toLocaleString() : "0"}원`}
            kind="bold18"
            color={theme.text}
          />
        </InfoWrapper>
      </CardContainer>
    </ThemeProvider>
  );
};

const CardContainer = styled.TouchableOpacity<{ background: string }>`
  width: 48%;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
  background-color: ${({ background }) => background};
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

export default ProductCardLarge;
