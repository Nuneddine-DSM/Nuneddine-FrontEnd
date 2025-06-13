import { useState } from "react"
import styled from "styled-components/native"
import { color, Font } from "../../styles"
import { Arrow } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import SearchInput from "./component/SearchInput";
import Tag from "./component/Tag"
import Rank from "./component/Rank"
import { useSearchStore } from "../../stores/useSearchStore"

const recommend = ["투명", "가벼운", "패션 안경", "안경테", "블루라이트 차단", "원데이"];

const rankValue = [
  { id: 1, rank: 1, brandName: "TART OPTICAL" },
  { id: 2, rank: 2, brandName: "CLICCLAC" },
  { id: 3, rank: 3, brandName: "NIRO" },
]

const Search = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [searchText, setSearchText] = useState('');

  const { setKeyword, resetFilters } = useSearchStore();

  const handleSearch = () => {
    if (!searchText.trim()) return;
    setKeyword(searchText.trim());
    resetFilters();
    navigation.navigate('SearchProduct');
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
          <SearchInput
            value={searchText}
            onChangeText={setSearchText}
            onSubmit={handleSearch}
          />
        }
      />
      <Content>
        <Section>
          <Font text="추천 검색어" kind="semi18" />
          <WrapTagList>
            {recommend.map((item, index) =>
              <Tag key={index} text={item} />
            )}
          </WrapTagList>
        </Section>

        <BrandList>
          <Font text="인기 브랜드" kind="semi18" />
          {rankValue.map(({ id, rank, brandName }) => (
            <Rank key={id} id={id} rank={rank} brandName={brandName} />
          ))}
        </BrandList>
      </Content>
    </>
  )
}

const Content = styled.View`
  flex: 1;
  gap: 40px;
  padding-top: 98px;
  background-color: ${color.white};
`

const Section = styled.View`
  padding: 7px 20px;
  gap: 24px;
`

const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HorizontalTagList = styled.View`
  flex-direction: row;
  gap: 10px;
`

const WrapTagList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`

const BrandList = styled.View`
  flex-direction: column;
  padding: 7px 20px;
  gap: 10px;
`

const RecentSearchWrapper = styled.View`
  flex-direction: column;
  padding: 0 20px;
`

export default Search;
