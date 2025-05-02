import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { TopBar } from "../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import { Tab } from "../../components/Shopping";
import { useState } from "react";
import ProductCardLarge from "../../components/Shopping/ProductCardLarge";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CategoryData } from "../Main/Data";

const data = [
  {
    shopId: 1,
    title: "브랜드",
    describe: "[안경 이름] 암튼 이름 겁나 김 뭐 mm 까지 나와있음",
    tag: "굵은테",
    price: 39000,
    image: "https://i.namu.wiki/i/8hxgVnq4W5zCE6FHyM9FhjBSPZ6K3MAxfKsOO5Vrzj8O121kWBnchyK7Ux6caItuyy0K2odSOD-GJhAvzfn5ZA.webp",
  },

]

const Like = () => {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState<number>(1)

  return (
    <Container>
      <TopBar
        text="좋아요"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <Tab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabData={CategoryData}
      />

      <ScrollView>
        <ProductCounter>
          <Font text={`상품 ${data.length}개`} kind="semi18" />
        </ProductCounter>

        <FlatList
          data={data}
          keyExtractor={(idx) => `${idx}`}
          renderItem={({ item }) => (
            <ProductCardLarge {...item} />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 48 }}
          onEndReachedThreshold={0.5}
        />
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
  padding: 20px;
`

const ProductList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  padding: 10px 16px;
`;

export default Like