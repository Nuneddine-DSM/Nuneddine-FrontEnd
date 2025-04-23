import styled from "styled-components/native";
import { Font, color } from "../../styles"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { Arrow } from "../../assets"
import { useState } from "react";
import { ProductCardLarge } from "../../components/Shopping";
import { RecommendData } from "./Data";
import { ScrollView } from "react-native-gesture-handler";

const SelectData = ["추천", "각진 안경테", "트렌드", "미니멀", "빈티지"];

const FaceFit = () => {
  const [isSelected, setIsSelected] = useState<string>("추천");

  const filteredProducts = RecommendData.find(data => data.category === isSelected)?.content || [];

  return (
    <Container>
      <TopBar
        text="얼굴형 별 추천"
        leftIcon={
          <TouchableOpacity onPress={() => { }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView>
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

          <ProductListContainer>
            {filteredProducts.map((product, index) => (
              <ProductCardLarge
                key={index}
                isDarkMode={true}
                {...product}
              />
            ))}
          </ProductListContainer>
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

export default FaceFit