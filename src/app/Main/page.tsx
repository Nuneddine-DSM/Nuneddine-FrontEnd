import { ScrollView } from "react-native-gesture-handler"
import ShopCard from "../../components/Shopping/ShopCard"
import styled from "styled-components/native"

const Main = () => {
  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        <ShoppingListWrapper horizontal showsHorizontalScrollIndicator={false}>
          <SoppingList>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </SoppingList>
        </ShoppingListWrapper>
      </Container>
    </>
  )
}

const Container = styled.ScrollView`
  padding-top: 72px;
  padding-bottom: 200px;
  background-color: white;
`

const ShoppingListWrapper = styled.ScrollView``

const SoppingList = styled.View`
  display: flex;
  flex-direction: row;
  gap: 7px;
`

export default Main