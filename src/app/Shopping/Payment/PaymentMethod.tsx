import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { PaymentData } from "./data";
import { useState } from "react";
import { Dimensions } from "react-native";
import { ImageSourcePropType } from "react-native";

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = 40;
const gap = 10;
const sectionWidth = (screenWidth - horizontalPadding - gap) / 2;

const PaymentMethod = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <PaymentMethodContainer>
      <ItemHeader>
        <Font text="결제 수단" kind="bold20" />
        <Font text="*" kind="bold20" color="pink300" />
      </ItemHeader>

      <PaymentMethodWrapper>
        {PaymentData.map(({ id, title, image, height }) => {
          const isSelected = selected === id;

          return (
            <PaymentSection
              key={id}
              onPress={() => setSelected(id || 1)}
              isSelected={isSelected}
              style={{ width: sectionWidth, marginRight: id! % 2 === 1 ? gap : 0 }}
            >
              {title && (
                <Font
                  text={title}
                  kind="bold18"
                  color={isSelected ? "pink300" : "gray500"}
                />
              )}
              {image && (
                <MethodImage
                  source={image as ImageSourcePropType}
                  resizeMode="contain"
                  height={height}
                />
              )}
            </PaymentSection>
          );
        })}
      </PaymentMethodWrapper>
    </PaymentMethodContainer>
  );
};

const PaymentMethodContainer = styled.View`
  background-color: ${color.white};
`

const ItemHeader = styled.View`
  flex-direction: row;
  padding: 18px 20px;
`

const PaymentMethodWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 20px;
`

const PaymentSection = styled.TouchableOpacity<{ isSelected?: boolean }>`
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1.5px;
  margin-bottom: 10px;
  border-color: ${({ isSelected }) => isSelected ? color.pink300 : color.gray300};
`

const MethodImage = styled.Image<{ height?: number }>`
  height: ${({ height }) => `${height}px`};
`

export default PaymentMethod;
