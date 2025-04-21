import styled from "styled-components/native"
import Header from "../../components/Main/Header"
import Search from "../../components/Main/Search"
import Banner from "./Banner"
import { NavigationListData } from "./Data"
import Shopping from "./Shopping"
import Footer from "../../components/Main/Footer"
import GlassesLensTab from "../../components/Shopping/GlassesLensTab"
import { useState } from "react"

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

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

        <GlassesLensTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

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

const ShoppingContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 36px 0 85px 20px;
`

export default Main