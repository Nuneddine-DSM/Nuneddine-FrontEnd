import { useState, useEffect } from "react"
import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { Arrow, Filter, X } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ProductCardLarge } from "../../components/Shopping";
import { Footer } from "../../components/Main";
import { useSearchStore } from "../../stores/useSearchStore";
import { searchHandler } from "../../apis/shops";
import { ShopType } from "../../interface";
import SearchInput from "../Search/component/SearchInput";
import {
  FrameShapeMap,
  FrameMaterialMap,
  LensColorMap,
  LensDateTypeMap,
  FrameShapeType,
  FrameMaterialType,
  LensColorType,
  LensDateType
} from "../Data";

const SearchProduct = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<ShopType[]>([]);

  useEffect(() => {
    if (keyword && keyword.trim() !== "") {
      resetFilters();
    }
  }, [searchText]);

  const {
    keyword,
    frame_shape,
    frame_material,
    lens_date_type,
    lens_color,
    productCount,
    setProductCount,
    toggleFilterValue,
    setKeyword,
    resetFilters
  } = useSearchStore();

  const allSelectedFilters = [
    ...frame_shape,
    ...frame_material,
    ...lens_color,
    ...lens_date_type,
  ];

  const filters = {
    keyword,
    frame_shape: [...frame_shape],
    frame_material: [...frame_material],
    lens_color: [...lens_color],
    lens_date_type: [...lens_date_type]
  }

  useEffect(() => {
    const fetchSearchedProducts = async () => {
      try {
        const result = await searchHandler(filters);
        setProducts(result.shop_list);
        setProductCount(result.shops_count);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSearchedProducts();
  }, [keyword, frame_shape, frame_material, lens_color, lens_date_type]);

  return (
    <>
      <TopBar
        leftIcon={
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'MainTabs',
                    state: {
                      index: 0,
                      routes: [{ name: 'Main' }]
                    }
                  }
                ]
              });
            }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
        rightIcon={
          <SearchInput
            value={searchText}
            onChangeText={(searchText) => {
              setKeyword(searchText);
              setSearchText(searchText);
            }}
          />
        }
      />
      <PageContainer>
        <FlatList
          data={products}
          keyExtractor={(item) => item.shop_id.toString()}
          renderItem={({ item }) => (
            <ProductCardLarge
              shopId={item.shop_id}
              image={item.image_urls[0]}
              title={item.brand_name}
              describe={item.glasses_name}
              tag={item.shop_type}
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
          ListHeaderComponent={
            <>
              <FilterWrapper>
                <FilterHeader onPress={() => navigation.navigate("Filter")}>
                  <Filter size={24} />
                  <Font text="필터 적용하기" kind="semi16" />
                </FilterHeader>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <SelectedTagsWrapper>
                    {allSelectedFilters.map((value, index) => {
                      const translatedValue =
                        FrameShapeMap[value as keyof typeof FrameShapeMap] ||
                        FrameMaterialMap[value as keyof typeof FrameMaterialMap] ||
                        LensColorMap[value as keyof typeof LensColorMap] ||
                        LensDateTypeMap[value as keyof typeof LensDateTypeMap] ||
                        value;

                      const getFilterKey = () => {
                        if (frame_shape.includes(value as FrameShapeType)) return 'frame_shape';
                        if (frame_material.includes(value as FrameMaterialType)) return 'frame_material';
                        if (lens_color.includes(value as LensColorType)) return 'lens_color';
                        if (lens_date_type.includes(value as LensDateType)) return 'lens_date_type';
                        return null;
                      };

                      const filterKey = getFilterKey();

                      return (
                        <TagController key={index}>
                          <Font text={translatedValue} kind="medium14" color="gray600" />
                          {filterKey && (
                            <TouchableOpacity onPress={() => toggleFilterValue(filterKey, value)}>
                              <X size={20} color={color.gray600} />
                            </TouchableOpacity>
                          )}
                        </TagController>
                      );
                    })}
                  </SelectedTagsWrapper>
                </ScrollView>

              </FilterWrapper>

              <ProductCountText>
                <Font text={`상품 ${productCount}개`} kind="medium16" color="gray600" />
              </ProductCountText>
            </>
          }
          ListFooterComponent={
            <Footer />
          }
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

const FilterWrapper = styled.View`
  flex-direction: column;
`

const FilterHeader = styled.TouchableOpacity`
  padding: 18px 20px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`;

const SelectedTagsWrapper = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  gap: 8px;
`;

const TagController = styled.View`
  padding: 8px 14px;
  gap: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: ${color.gray50};
`;

const ProductCountText = styled.View`
  padding: 12px 20px;
  flex-direction: row;
`;

export default SearchProduct;