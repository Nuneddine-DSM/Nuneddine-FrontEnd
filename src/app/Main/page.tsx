import styled from "styled-components/native"
import Header from "../../components/Shopping/Header"
import Search from "../../components/Shopping/Search"
import Banner from "./Banner"
import { CategoryData, NavigationListData } from "./Data"
import { useState } from "react"
import Shopping from "./Shopping"
import Footer from "../../components/Shopping/Footer"

const Main = () => {
  const [tabSelected, setTabSelected] = useState<number>(1)

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>

        <SearchWrapper>
          <Search />
        </SearchWrapper>

        <Banner />

        <NavigationListWrapper>
          {NavigationListData.map((value) => (
            <NavigationTab key={value.id}>
              <TabIconWrapper></TabIconWrapper>
              <TabLabel>{value.name}</TabLabel>
            </NavigationTab>
          ))}
        </NavigationListWrapper>

        <CategoryTabContainer>
          {CategoryData.map(({ id, text, icon }) => (
            <CategoryTab
              key={id}
              onPress={() => setTabSelected(id!)}
              selected={tabSelected === id}
            >
              {icon}
              <CategoryLabel>{text}</CategoryLabel>
            </CategoryTab>
          ))}
        </CategoryTabContainer>

        <ShoppingContainer>
          <Shopping />
          <Shopping />
          <Shopping />
          <Shopping />
          <Shopping />
        </ShoppingContainer>

        <Footer />
      </Container>
    </>
  )
}

const Container = styled.ScrollView`
  background-color: white;
`

const SearchWrapper = styled.View`
  padding: 4px 20px 10px;
`

const NavigationListWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
`

const NavigationTab = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const TabIconWrapper = styled.View`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: red;
`

const TabLabel = styled.Text`
  font-size: 16px;
  font-weight: 500;
`

const CategoryTabContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const CategoryTab = styled.TouchableOpacity<{
  selected?: boolean
}>`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 5px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ selected }) => selected ? `red` : `white`};
`

const CategoryLabel = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

const ShoppingContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 36px 0 85px 20px;
`

export default Main