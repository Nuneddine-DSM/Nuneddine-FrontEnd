import styled from "styled-components/native";
import { Font, color } from "../../styles"
import { TopBar } from "../../components"
import { TouchableOpacity, View } from "react-native"
import { Arrow } from "../../assets"
import { useState } from "react";
import { ProductCardLarge } from "../../components/Shopping";
import { RecommendData } from "./Data";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import MyFaceCard from "./MyFaceCard";

const FaceType = require("../../assets/FaceType.png");
const BackgroundEffect = require("../../assets/BackgroundEffect.png")

const SelectData = ["추천", "각진 안경테", "트렌드", "미니멀", "빈티지"];

const Recommend = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [isSelected, setIsSelected] = useState<string>("추천");

  const filteredProducts = RecommendData.find(data => data.category === isSelected)?.content || [];

  const loadMoreProducts = () => { }

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
            <MyFaceCard />
            <SideCardImage source={FaceType} />
          </MyFaceCardWrapper>
        </FaceShapeDetails>

        <StyleRecommendation>
          <BackEffect source={BackgroundEffect} resizeMode="contain" />
          <StyleTitleWrapper>
            <Highlight />
            <Font text="당신의 매력을 더해줄 안경테" kind="light24" />
            <Font text="이런 스타일 어때요?" kind="extraBold28" style={{ zIndex: 10 }} />
          </StyleTitleWrapper>

          <View style={{ alignItems: "center" }}>
            <Font
              text="라인이 위로 올라간 "
              kind="regular18"
              color="gray600"
              style={{ lineHeight: 34 }}
            />
            <Font
              text="캣아이, 브로우라인"
              kind="bold18"
              color="gray600"
              style={{ lineHeight: 34 }}
            />
            <Font
              text={`스타일이 잘 어울려요. 이런 프레임이\n얼굴에 구조감을 더해주고\n더 세련된 인상을 만들어줘요.`}
              kind="regular18"
              color="gray600"
              style={{ textAlign: "center", lineHeight: 34 }}
            />
          </View>
          <Font
            text={`반대로, 얼굴형과 비슷한 동그란 테는\n얼굴을 더 둥글어 보이게 할 수 있어요.`}
            kind="regular18"
            color="gray600"
            style={{ textAlign: "center", lineHeight: 34 }}
          />
        </StyleRecommendation>

        <RecommendationSection>
          <RecommendationHeader>
            <Font
              text={`안경 하나 바꿨을 뿐인데\n내 얼굴이 살아남`}
              kind="semi28"
              color="white"
              style={{ textAlign: "center" }}
            />
            <Font text="어울림부터 트렌드까지, 직접 골라보는 재미" kind="regular16" color="gray500" />
          </RecommendationHeader>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryTabList>
              {SelectData.map((item) => (
                <CategoryTabItem
                  key={item}
                  onPress={() => setIsSelected(item)}
                  isSelected={isSelected === item}
                >
                  <Font
                    text={item}
                    kind="medium18"
                    color={isSelected === item ? "white" : "gray400"}
                  />
                </CategoryTabItem>
              ))}
            </CategoryTabList>
          </ScrollView>

          <FlatList
            data={filteredProducts}
            keyExtractor={(item, idx) => `${item.title}-${idx}`}
            renderItem={({ item }) => (
              <ProductCardLarge
                isDarkMode={true}
                {...item}
              />
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.5}
          />
        </RecommendationSection>
      </ScrollView>
    </Container >
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.black};
`

const StyleRecommendation = styled.View`
  position: relative;
  width: 100%;
  height: 672px;
  flex-direction: column;
  padding: 88px 55px;
  gap: 60px;
  background-color: ${color.white};
`

const BackEffect = styled.Image`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-200px);
  width: 480px;
  height: 800px;
`

const Highlight = styled.View`
  position: absolute;
  top: 50px;
  width: 224px;
  height: 20px;
  background-color: ${color.yellow200};
  z-index: 1;
`

const StyleTitleWrapper = styled.View`
  position: relative;
  flex-direction: column;
  align-items: center;
`

const FaceShapeDetails = styled.View`
  width: 100%;
  padding: 88px 0 200px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
`

const MyFaceCardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 36px;
`

const SideCardImage = styled.Image`
  width: 315px;
  height: 457px;
  border-radius: 20px;
`

const RecommendationSection = styled.View`
  flex-direction: column;
`

const RecommendationHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 20px;
  gap: 8px;
`

const CategoryTabList = styled.View`
  flex-direction: row;
`

const CategoryTabItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 18px 20px;
  border-bottom-width: ${({ isSelected }) => (isSelected ? 3 : 0)}px;
  border-color: ${({ isSelected }) => isSelected ? color.white : 'none'};
`

const ProductListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 28px 20px;
`

export default Recommend