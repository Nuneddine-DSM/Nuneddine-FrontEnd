import { useState } from "react"
import { color, Font } from "../../styles"
import styled from "styled-components/native"
import Banner from "./Banner"
import { Arrow } from "../../assets"
import { Header, Footer } from "../../components/Main"
import { NavigationListData, MainShoppingData, FramesTag } from "./Data"
import { ProductCardSmall, GlassesLensTab } from "../../components/Shopping"
import { ScrollView } from "react-native-gesture-handler"

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedTag, setSelectedTag] = useState<string>("둥근테");

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>

        <Banner />

        <NavigationListWrapper>
          {NavigationListData.map((value) => (
            <NavigationTab key={value.id}>
              <TabIconWrapper></TabIconWrapper>
              <Font text={value.name} kind="medium16" />
            </NavigationTab>
          ))}
        </NavigationListWrapper>

        <GlassesLensTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <RecommendedListWrapper>
          {MainShoppingData.map((item) => (
            <RecommendedSection key={item.name}>
              <ProductIntroWrapper>
                <TextBox>
                  <Font text={item.title} kind="semi24" />
                  <Font text={item.subTitle} kind="regular16" color="gray600" />
                </TextBox>

                {item.name === "Frames" && (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TagWrapper>
                      {FramesTag.map((tag, index) => (
                        <Tag
                          key={index}
                          isSelected={selectedTag === tag}
                          onPress={() => setSelectedTag(tag)}
                        >
                          <Font
                            text={tag}
                            kind="medium16"
                            color={selectedTag === tag ? "pink300" : "gray500"}
                          />
                        </Tag>
                      ))}
                    </TagWrapper>
                  </ScrollView>
                )}
                {item.name === "Hipster" && <Image source={require("../../assets/Hipster.png")} />}

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <ProductList>
                    {item.content.map((product, index) => (
                      <ProductCardSmall key={index} {...product} />
                    ))}
                  </ProductList>
                </ScrollView>
              </ProductIntroWrapper>

              <MoreProductsButton>
                <Font text="더 많은 상품 구경하기" kind="medium16" color="gray500" />
                <Arrow size={24} color={color.gray500} rotate="right" />
              </MoreProductsButton>
            </RecommendedSection>
          ))}
        </RecommendedListWrapper>

        <Footer />
      </Container >
    </>
  )
}

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  flex: 1;
  background-color: ${color.white};
`

const NavigationListWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const NavigationTab = styled.View`
  align-items: center;
  gap: 10px;
`

const TabIconWrapper = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: red;
`

const RecommendedListWrapper = styled.View`
  padding: 35px 0 185px 20px;
  gap: 70px;
`

const RecommendedSection = styled.View`
  gap: 54px;
`

const ProductIntroWrapper = styled.View`
  gap: 20px;
`

const TextBox = styled.View`
  gap: 2px;
`

const Image = styled.Image`
  width: 100%;
  height: 390px;
`

const ProductList = styled.View`
  flex-direction: row;
  gap: 10px;
`

const MoreProductsButton = styled.TouchableOpacity`
  width: 390px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.white};
`

const TagWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`

const Tag = styled.TouchableOpacity<{ isSelected?: boolean }>`
  padding: 8px 18px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ isSelected }) => isSelected ? color.pink300 : color.gray400};
  background-color: ${({ isSelected }) => isSelected ? color.pink100 : color.white};
`

export default Main