import styled from "styled-components/native";
import ShopCard from "../../components/Shopping/ShopCard"
import { Arrow } from "../../assets";

const Shopping = () => {
  return (
    <ShoppingContainer>
      <InfoWrapper>
        <TextBox>
          <Title>유행템, 나도 찰떡 가능?</Title>
          <Info>요즘 인기템 총정리! 고르기 전에 참고해요</Info>
        </TextBox>

        <Image />

        <ShoppingListWrapper horizontal showsHorizontalScrollIndicator={false}>
          <SoppingList>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </SoppingList>
        </ShoppingListWrapper>
      </InfoWrapper>

      <ShowMoreButton>
        <Show>더 많은 상품 구경하기</Show>
        <Arrow size={24} color="gray" rotate="right"/>
      </ShowMoreButton>
    </ShoppingContainer>
  )
}

const ShoppingContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 54px;
`

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Image = styled.Image``

const TextBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`

const Info = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: red;
`

const ShoppingListWrapper = styled.ScrollView``

const SoppingList = styled.View`
  display: flex;
  flex-direction: row;
  gap: 7px;
`

const ShowMoreButton = styled.TouchableOpacity({
  width: '390px',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 5,
  borderColor: 'red',
  borderWidth: 1,
});

const Show = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: gray;
`

export default Shopping