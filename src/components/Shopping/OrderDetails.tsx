import styled from "styled-components/native";
import { useState } from "react"
import { Font, color } from "../../styles";
import { CartItemType } from "../../interface";
import { QuantitySelector } from ".";

const OrderDetails = ({ item }: { item: CartItemType }) => {
  const [count, setCount] = useState(item.count);

  return (
    <Container>
      <TopSection>
        <Image source={{ uri: item.image_urls[0] }} resizeMode="cover" />

        <Details>
          <Section>
            <Font text={item.brand_name} kind="bold16" />
            <Font
              text={item.glass_name}
              kind="medium16"
              style={{ flexWrap: 'wrap' }}
              numberOfLines={2}
              ellipsizeMode="tail"
            />
          </Section>

          <QuantitySelector count={count} onChange={setCount} />

          <Section>
            <Font text={`${item.price.toLocaleString()}원`} kind="bold16" />
          </Section>
        </Details>
      </TopSection>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 30px 0;
  gap: 10px;
  border-bottom-width: 2px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`;

const TopSection = styled.View`
  flex-direction: row;
  gap: 14px;
`;

const Image = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 4px;
  background-color: ${color.gray200};
`;

const Details = styled.View`
  width: 248px;
  justify-content: space-around;
`;

const Section = styled.View`
  flex-direction: column;
  gap: 4px;
`;

const OptionBox = styled.View`
  padding: 14px 11px;
  border-radius: 4px;
  background-color: ${color.gray50};
`;

export default OrderDetails;
