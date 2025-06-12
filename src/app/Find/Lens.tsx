import styled from "styled-components/native";
import { color } from "../../styles"
import { Arrow } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { FlatList } from "react-native-gesture-handler";
import { ProductCardLarge } from "../../components/Shopping";
import { useQuery } from "@tanstack/react-query";
import { lensProduct } from "../../apis/shops";
import { mapDate } from "../Data";

const LensDataFind = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { data: LensData } = useQuery({
    queryKey: ["lensProduct"],
    queryFn: lensProduct
  })

  const allGlasses = [
    ...LensData?.trending_list,
    ...LensData?.hipster_list,
    ...LensData?.hot_now_list,
    ...LensData?.classic_list
  ];

  return (
    <>
      <TopBar
        text="렌즈 ALL"
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
              tag={mapDate(item.date_type)}
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

export default LensDataFind;