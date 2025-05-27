import { useState, useMemo, useEffect } from "react";
import { color, Font } from "../../styles";
import styled from "styled-components/native";
import Banner from "./Banner";
import MainBanner from "../../assets/MainBanner.png"
import { Arrow } from "../../assets";
import { Header, Footer } from "../../components/Main";
import { ProductCardSmall, Tab } from "../../components/Shopping";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { glassesProduct, lensProduct, searchHandler } from "../../apis/shops";
import { useQuery } from "@tanstack/react-query";
import { NavigationListData, CategoryData, BannerData } from "./Data";
import { FrameShapeMap, FrameShapeType, mapFrameShape, LensColorMap, LensColorType } from "../Data";
import { useSearchStore } from "../../stores/useSearchStore";

const Main = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const { frame_shape, lens_color, setSingleFilterValue } = useSearchStore();

  const { data: glassesData } = useQuery({
    queryKey: ["glassesProduct"],
    queryFn: glassesProduct,
  });

  const { data: lensData } = useQuery({
    queryKey: ["lensProduct"],
    queryFn: lensProduct
  });

  const sectionData = useMemo(() => {
    const dataSource = selectedTab === 1 ? glassesData : lensData;
    if (!dataSource) return [];

    const isGlasses = selectedTab === 1;
    return [
      {
        key: "trending_list",
        title: "유행템, 나도 찰떡 가능?",
        subTitle: "요즘 인기템 총정리! 고르기 전에 참고해요",
        name: "Trending",
        list: dataSource.trending_list ?? [],
      },
      {
        key: "popular_list",
        title: isGlasses ? "태만 봐도 느낌 온다" : "렌즈 맛집은 나야",
        subTitle: isGlasses ? "각진 태부터 둥근 태까지, 내 얼굴에 맞는 스타일 찾기" : "자연스러운 데일리부터 포인트까지, 찰떡 렌즈 고르기",
        name: "Popular",
        list: []
      },
      {
        key: "hipster_list",
        title: "힙스터's Pick",
        subTitle: "스타일에 진심인 사람들의 추천템!",
        name: "Hipster",
        list: dataSource.hipster_list ?? [],
      },
      {
        key: "hot_now_list",
        title: "지금 가장 핫한 브랜드",
        subTitle: "놓치면 아쉬운, 지금 제일 잘나가는 브랜드만!",
        name: "Hot",
        list: dataSource.hot_now_list ?? []
      },
      {
        key: "classic_list",
        title: "Classic in Retro Mood",
        subTitle: "빈티지 감성 좋아하는 당신을 위한 셀렉션",
        name: "Classic",
        list: dataSource.classic_list ?? [],
      },
    ];
  }, [selectedTab, glassesData, lensData]);

  const filters = selectedTab === 1
    ? { frame_shape }
    : { lens_color };

  const { data: searchData } = useQuery({
    queryKey: ['search', filters],
    queryFn: () => searchHandler(filters),
  });

  const renderSection = (item: typeof sectionData[0]) => (
    <RecommendedSection key={item.name}>
      <ProductIntroWrapper>
        <TextBox>
          <Font text={item.title} kind="semi24" />
          <Font text={item.subTitle} kind="regular16" color="gray600" />
        </TextBox>

        {item.name === "Popular" && (
          <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TagWrapper>
                {Object.entries(selectedTab === 1 ? FrameShapeMap : LensColorMap).map(([key, value]) => {
                  const shapeKey = key as FrameShapeType | LensColorType;
                  const isSelected = selectedTab === 1
                    ? frame_shape.includes(shapeKey as FrameShapeType)
                    : lens_color.includes(shapeKey as LensColorType);

                  return (
                    <Tag
                      key={key}
                      isSelected={isSelected}
                      onPress={() => {
                        if (!isSelected) {
                          if (selectedTab === 1) {
                            setSingleFilterValue('frame_shape', shapeKey as FrameShapeType);
                          } else {
                            setSingleFilterValue('lens_color', shapeKey as LensColorType);
                          }
                        }
                      }}
                    >
                      <Font
                        text={value}
                        kind="medium16"
                        color={isSelected ? "pink300" : "gray500"}
                      />
                    </Tag>
                  );
                })}
              </TagWrapper>
            </ScrollView>

            <FlatList
              horizontal
              data={searchData ?? []}
              keyExtractor={item => item.shop_id.toString()}
              renderItem={({ item }) => (
                <ProductCardSmall
                  shopId={item.shop_id}
                  image={item.image_urls?.[0] ?? ''}
                  title={item.brand_name}
                  describe={item.glasses_name}
                  tag={mapFrameShape(item.frame_shape)}
                  price={item.price}
                />
              )}
            />
          </>
        )}

        {item.name === "Hipster" && <Image source={require("../../assets/Hipster.png")} />}

        <FlatList
          horizontal
          data={item.list}
          keyExtractor={item => item.shop_id.toString()}
          renderItem={({ item }) => (
            <ProductCardSmall
              shopId={item.shop_id}
              image={item.image_urls?.[0] ?? ''}
              title={item.brand_name}
              describe={item.glasses_name}
              tag={mapFrameShape(item.frame_shape)}
              price={item.price}
            />
          )}
        />
      </ProductIntroWrapper>

      <MoreProductsButton onPress={() => navigation.navigate("SearchProduct")}>
        <Font text="더 많은 상품 구경하기" kind="medium16" color="gray500" />
        <Arrow size={24} color={color.gray500} rotate="right" />
      </MoreProductsButton>

      {item.name === "Trending" && <BannerImage source={MainBanner} />}
    </RecommendedSection>
  );

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <Banner data={BannerData} />

        <NavigationListWrapper>
          {NavigationListData.map(({ id, name, href, image, imageHeight = 0, imageWidth = 0 }) => (
            <NavigationTab
              key={id}
              onPress={() => href ? navigation.navigate(href) : null}
            >
              <TabIconWrapper>
                <Icon source={image} height={imageHeight} width={imageWidth} />
              </TabIconWrapper>
              <Font text={name} kind="medium16" />
            </NavigationTab>
          ))}
        </NavigationListWrapper>

        <Tab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabData={CategoryData}
        />

        <RecommendedListWrapper>
          {sectionData.map(renderSection)}
        </RecommendedListWrapper>

        <Footer />
      </Container>
    </>
  );
};

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  flex: 1;
  background-color: ${color.white};
`;

const NavigationListWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const NavigationTab = styled.TouchableOpacity`
  align-items: center;
  gap: 10px;
`;

const TabIconWrapper = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #F4F4F7;
`;

const Icon = styled.Image<{
  height: number,
  width: number
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`

const RecommendedListWrapper = styled.View`
  padding: 35px 0 185px 20px;
  gap: 70px;
`;

const RecommendedSection = styled.View`
  gap: 54px;
`;

const ProductIntroWrapper = styled.View`
  gap: 20px;
`;

const TextBox = styled.View`
  gap: 2px;
`;

const Image = styled.Image`
  width: 370px;
  height: 390px;
`;

const MoreProductsButton = styled.TouchableOpacity`
  width: 370px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.white};
`;

const TagWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const Tag = styled.TouchableOpacity<{ isSelected?: boolean }>`
  padding: 8px 18px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? color.pink300 : color.gray400)};
  background-color: ${({ isSelected }) => (isSelected ? color.pink100 : color.white)};
`;

const BannerImage = styled.Image`
  width: 370px;
  height: 139px;
  border-radius: 8px;
`

export default Main;
