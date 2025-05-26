import { useState, useMemo } from "react"
import { color, Font } from "../../styles"
import styled from "styled-components/native"
import Banner from "./Banner"
import { Arrow } from "../../assets"
import { Header, Footer } from "../../components/Main"
import { NavigationListData, FramesTag } from "./Data"
import { ProductCardSmall, Tab } from "../../components/Shopping"
import { ScrollView } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { CategoryData, BannerData } from "./Data"
import { glassesProduct, lensProduct } from "../../apis/shops"
import { useQuery } from "@tanstack/react-query";
import { mapFrameShape } from "../Data"
import { ProductType } from "../../interface"

const Main = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedTag, setSelectedTag] = useState<string>("둥근테");

  const { data: glassesData } = useQuery({
    queryKey: ["glassesProduct"],
    queryFn: glassesProduct,
  })

  const { data: lensData } = useQuery({
    queryKey: ["lensProduct"],
    queryFn: lensProduct
  })

  const sectionGlassesData = [
    {
      key: "trending_list",
      title: "유행템, 나도 찰떡 가능?",
      subTitle: "요즘 인기템 총정리! 고르기 전에 참고해요",
      name: "Popular",
      list: glassesData?.trending_list ?? [],
    },
    {
      key: "hot_now_list",
      title: "태만 봐도 느낌 온다",
      subTitle: "각진 태부터 둥근 태까지, 내 얼굴에 맞는 스타일 찾기",
      name: "Frames",
      list: glassesData?.hot_now_list ?? [],
    },
    {
      key: "hipster_list",
      title: "힙스터's Pick",
      subTitle: "스타일에 진심인 사람들의 추천템!",
      name: "Hipster",
      list: glassesData?.hipster_list ?? [],
    },
    {
      key: "classic_list",
      title: "클래식은 영원하다",
      subTitle: "꾸준히 사랑받는 스테디셀러",
      name: "Classic",
      list: glassesData?.classic_list ?? [],
    },
  ];


  const sectionLensData = [
    {
      key: "trending_list",
      title: "유행템, 나도 찰떡 가능?",
      subTitle: "요즘 인기템 총정리! 고르기 전에 참고해요",
      name: "Popular",
      list: lensData?.trending_list ?? [],
    },
    {
      key: "hot_now_list",
      title: "태만 봐도 느낌 온다",
      subTitle: "각진 태부터 둥근 태까지, 내 얼굴에 맞는 스타일 찾기",
      name: "Frames",
      list: lensData?.hot_now_list ?? [],
    },
    {
      key: "hipster_list",
      title: "힙스터's Pick",
      subTitle: "스타일에 진심인 사람들의 추천템!",
      name: "Hipster",
      list: lensData?.hipster_list ?? [],
    },
    {
      key: "classic_list",
      title: "클래식은 영원하다",
      subTitle: "꾸준히 사랑받는 스테디셀러",
      name: "Classic",
      list: lensData?.classic_list ?? [],
    },
  ]

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <Banner data={BannerData} />

        <NavigationListWrapper>
          {NavigationListData.map(({ id, name, href }) => (
            <NavigationTab
              key={id}
              onPress={() => href ? navigation.navigate(href) : null}
            >
              <TabIconWrapper />
              <Font text={name} kind="medium16" />
            </NavigationTab>
          ))}
        </NavigationListWrapper>

        <Tab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabData={CategoryData}
        />

        {selectedTab === 1 ?
          <RecommendedListWrapper>
            {sectionGlassesData.map((item) => (
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
                      {item.list.map((product: ProductType, index: number) => (
                        <ProductCardSmall
                          key={index}
                          shopId={product.shop_id}
                          image={product.image_urls[0]}
                          title={product.brand_name}
                          describe={product.glasses_name}
                          tag={mapFrameShape(product.frame_shape)}
                          price={product.price}
                        />
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
          </RecommendedListWrapper> :
          <RecommendedListWrapper>
            {sectionLensData.map((item) => (
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
                      {item.list.map((product: ProductType, index: number) => (
                        <ProductCardSmall
                          key={index}
                          shopId={product.shop_id}
                          image={product.image_urls[0]}
                          title={product.brand_name}
                          describe={product.glasses_name}
                          tag={mapFrameShape(product.frame_shape)}
                          price={product.price}
                        />
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
        }


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

const NavigationTab = styled.TouchableOpacity`
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