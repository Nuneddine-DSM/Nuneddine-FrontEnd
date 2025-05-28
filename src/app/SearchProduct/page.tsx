import { useState } from "react"
import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { Arrow, Filter, X } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import SearchInput from "../Search/component/SearchInput";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ProductCardLarge } from "../../components/Shopping";
import { ProductData } from "./Data";
import { Footer } from "../../components/Main";
import { useSearchStore } from "../../stores/useSearchStore";
import { searchHandler } from "../../apis/shops";

const productCount = 1000;

const SearchProduct = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [searchText, setSearchText] = useState("");

  const {
    keyword,
    frame_shape,
    frame_material,
    lens_date_type,
    lens_color
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

  const Searched = () => {
    searchHandler(filters)
  }

  return (
    <>
      <TopBar
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
        rightIcon={
          <SearchInput value={searchText} onChangeText={setSearchText} />
        }
      />
      <PageContainer>
        <FlatList
          data={ProductData}
          keyExtractor={(item, idx) => `${item.title}-${idx}`}
          renderItem={({ item }) => (
            <ProductCardLarge {...item} />
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
                    {allSelectedFilters.map((tag, index) =>
                      <TagController key={index}>
                        <Font text={tag} kind="medium14" color="gray600" />
                        <X size={20} color={color.gray600} />
                      </TagController>
                    )}
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