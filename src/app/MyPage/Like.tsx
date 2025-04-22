import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { TopBar } from "../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import { GlassesLensTab } from "../../components/Shopping";
import { useState } from "react";
import ProductCard from "../../components/Shopping/ProductCard";
import { ScrollView } from "react-native-gesture-handler";

const Like = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1)
  const [counter, setCounter] = useState<number>(1)

  return (
    <Container>
      <TopBar
        text="좋아요"
        leftIcon={
          <TouchableOpacity onPress={() => { }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <GlassesLensTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <ScrollView>
        <ProductCounter>
          <Font text={`상품 ${counter}개`} kind="semi18" />
        </ProductCounter>

        <ProductList>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>
      </ScrollView>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`

const ProductCounter = styled.View`
  padding: 16px;
`

const ProductList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  padding: 10px 16px;
`;

export default Like