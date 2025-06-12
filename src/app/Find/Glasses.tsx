import styled from "styled-components/native";
import { color } from "../../styles"
import { Arrow } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { FlatList } from "react-native-gesture-handler";
import { ProductCardLarge } from "../../components/Shopping";
import { useQuery } from "@tanstack/react-query";
import { glassesProduct } from "../../apis/shops";
import { mapFrameShape } from "../Data";

const GlassesDataFind = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { data: glassesData } = useQuery({
    queryKey: ["glassesProduct"],
    queryFn: glassesProduct
  })

  const allGlasses = [
    ...glassesData?.trending_list,
    ...glassesData?.hipster_list,
    ...glassesData?.hot_now_list,
    ...glassesData?.classic_list
  ];

  return (
    <>
      <TopBar
        text="안경 ALL"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <PageContainer>
        <FlatList
          data={allGlasses}
          keyExtractor={(item) => item.shop_id.toString()}
          renderItem={({ item }) => (
            <ProductCardLarge
              shopId={item.shop_id}
              image={item.image_urls[0]}
              title={item.brand_name}
              describe={item.glasses_name}
              tag={mapFrameShape(item.frame_shape)}
              price={item.price}
              isLiked={item.is_liked}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20
          }}
          showsVerticalScrollIndicator={false}
        />
      </PageContainer>
    </>
  )
}

const PageContainer = styled.View`
  flex: 1;
  gap: 16px;
  padding-top: 98px;
  background-color: ${color.white};
`;

export default GlassesDataFind;