import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { TopBar } from "../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../assets";
import { Tab } from "../../components/Shopping";
import { useState, useEffect } from "react";
import ProductCardLarge from "../../components/Shopping/ProductCardLarge";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CategoryData } from "../Main/Data";
import { wishlistHandler } from "../../apis/shops";

const Like = () => {
  const navigation = useNavigation();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<number>(1);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await wishlistHandler();
        setWishlist(response.data.shop_list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

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
          <Font text={`상품 ${wishlistHandler.length}개`} kind="semi18" />
        </ProductCounter>

        <FlatList
          data={wishlist}
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
