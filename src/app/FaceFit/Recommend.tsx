import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useState } from 'react';
import { ProductCardLarge } from '../../components/Shopping';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MyFaceCard from './MyFaceCard';
import { useRoute } from '@react-navigation/native';
import { searchHandler, glassesProduct } from '../../apis/shops';
import { useQuery } from '@tanstack/react-query';
import { FaceData } from './Data';
import { FrameShapeMap, FrameShapeType } from '../Data';

const FaceType = require('../../assets/FaceType.png');
const BackgroundEffect = require('../../assets/BackgroundEffect.png');

const Recommend = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();

  const { selectedId } = route.params as { selectedId: string };

  const matchedData = FaceData.find(
    (face) => face.id === Number(selectedId)
  );

  const {
    name,
    title,
    subTitle,
    tag,
    describe,
    recommend,
    alert,
    style
  } = matchedData ?? {};

  const selectedStyle = style?.[1];

  const shapeKey = Object.entries(FrameShapeMap).find(
    ([_, value]) => value === selectedStyle
  )?.[0];

  const filters = {
    frame_shape: shapeKey ? [shapeKey as FrameShapeType] : undefined
  }

  const { data: shapeData, error, isLoading } = useQuery({
    enabled: !!shapeKey,
    queryKey: ["search", filters],
    queryFn: () => searchHandler(filters),
  });

  const { data: glassesData } = useQuery({
    queryKey: ["glassesProduct"],
    queryFn: glassesProduct
  })

  const tabData = () => {
    return [
      {
        name: "recommend",
        list: [
          ...(glassesData.trending_list ?? []),
          ...(glassesData.hot_now_list ?? []),
          ...(glassesData.classic_list ?? [])
        ]
      },
      { name: "trend", list: glassesData.trending_list ?? [] },
      { name: "minimal", list: glassesData.hot_now_list ?? [] },
      { name: "classic_list", list: glassesData.classic_list ?? [] }
    ];
  };

  const [isSelectedTab, setIsSelectedTab] = useState<number>(0);

  return (
    <Container>
      <TopBar
        text="얼굴형 별 추천"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <FaceShapeDetails>
          <MyFaceCardWrapper>
            <SideCardImage source={FaceType} />
            <MyFaceCard
              name={name || ""}
              title={title || ""}
              subTitle={subTitle || ""}
              tag={tag || []}
              describe={describe || ""}
            />
            <SideCardImage source={FaceType} />
          </MyFaceCardWrapper>
        </FaceShapeDetails>

        <StyleRecommendation>
          <BackEffect source={BackgroundEffect} resizeMode="contain" />
          <StyleTitleWrapper>
            <Highlight />
            <Font text="당신의 매력을 더해줄 안경테" kind="light24" />
            <Font
              text="이런 스타일 어때요?"
              kind="extraBold28"
              style={{ zIndex: 10 }}
            />
          </StyleTitleWrapper>

          <Font
            text={recommend}
            kind="regular18"
            color="gray600"
            style={{ textAlign: 'center', lineHeight: 34 }}
          />
          <Font
            text={alert}
            kind="regular18"
            color="gray600"
            style={{ textAlign: 'center', lineHeight: 34 }}
          />
        </StyleRecommendation>

        <RecommendationSection>
          <RecommendationHeader>
            <Font
              text={`안경 하나 바꿨을 뿐인데\n내 얼굴이 살아남`}
              kind="semi28"
              color="white"
              style={{ textAlign: 'center' }}
            />
            <Font
              text="어울림부터 트렌드까지, 직접 골라보는 재미"
              kind="regular16"
              color="gray500"
            />
          </RecommendationHeader>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryTabList>
              {style?.map((item, index) => (
                <CategoryTabItem
                  key={item}
                  onPress={() => setIsSelectedTab(index)}
                  isSelected={isSelectedTab === index}>
                  <Font
                    kind="medium18"
                    text={item}
                    color={isSelectedTab === index ? 'white' : 'gray400'}
                  />
                </CategoryTabItem>
              ))}
            </CategoryTabList>
          </ScrollView>

          <FlatList
            data={isSelectedTab === 1 ? shapeData : tabData()[isSelectedTab]?.list ?? []}
            keyExtractor={(item, idx) => `${item.title}-${idx}`}
            renderItem={({ item }) => (
              <ProductCardLarge
                isDarkMode={true}
                shopId={item.shop_id}
                image={item.image_urls[1]}
                title={item.brand_name}
                describe={item.glasses_name}
                tag={FrameShapeMap[item.frame_shape as keyof typeof FrameShapeMap]}
                price={item.price}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 32, paddingBottom: 48 }}
            onEndReachedThreshold={0.5}
          />
        </RecommendationSection>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.black};
`;

const StyleRecommendation = styled.View`
  position: relative;
  width: 100%;
  height: 672px;
  flex-direction: column;
  padding: 88px 55px;
  gap: 60px;
  background-color: ${color.white};
`;

const BackEffect = styled.Image`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-200px);
  width: 480px;
  height: 800px;
`;

const Highlight = styled.View`
  position: absolute;
  top: 50px;
  width: 224px;
  height: 20px;
  background-color: ${color.yellow200};
  z-index: 1;
`;

const StyleTitleWrapper = styled.View`
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const FaceShapeDetails = styled.View`
  width: 100%;
  padding: 88px 0 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
`;

const MyFaceCardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

const SideCardImage = styled.Image`
  width: 315px;
  height: 457px;
  border-radius: 20px;
`;

const RecommendationSection = styled.View`
  flex-direction: column;
`;

const RecommendationHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 20px;
  gap: 8px;
`;

const CategoryTabList = styled.View`
  flex-direction: row;
`;

const CategoryTabItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 18px 20px;
  border-bottom-width: ${({ isSelected }) => (isSelected ? 3 : 0)}px;
  border-color: ${({ isSelected }) => (isSelected ? color.white : 'none')};
`;

const ProductListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 28px 20px;
`;

export default Recommend;
