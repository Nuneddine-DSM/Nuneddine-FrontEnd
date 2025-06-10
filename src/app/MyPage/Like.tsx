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
import { getLikeGlasses, getLikeLens } from "../../apis/shops";
import { useQuery } from "@tanstack/react-query";
import { mapFrameShape } from "../Data";

const Like = () => {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState<number>(1);

  const { data: GlassesData } = useQuery({
    queryKey: ["glasses"],
    queryFn: getLikeGlasses
  })

  const { data: LensData } = useQuery({
    queryKey: ["lens"],
    queryFn: getLikeLens
  })

  const selected = selectedTab === 1 ? GlassesData : LensData;

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
          <Font text={`상품 ${selected?.shops_count}개`} kind="semi18" />
        </ProductCounter>

        <FlatList
          data={selected?.shop_list ?? []}
          keyExtractor={(_, idx) => `${idx}`}
          renderItem={({ item }) => (
            <ProductCardLarge
              shopId={item.shop_id}
              image={item.image_urls?.[0]}
              title={item.brand_name}
              describe={item.glass_name}
              tag={mapFrameShape(item.frame_shape)}
              price={item.price}
              isLiked={true}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 48 }}
          onEndReachedThreshold={0.5}
        />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`;

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

export default Like;
