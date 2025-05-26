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
import RecentSearches from "./component/RecentSearches"

const recently = ["투명렌즈"];
const recommend = ["힙한", "렌즈", "추천", "검색어", "힙한", "검색어"];
const searchKeyword = ["키워드", "키워드", "키워드"];

const rankValue = [
  { id: 1, rank: 1, brandName: "브랜드" },
  { id: 2, rank: 2, brandName: "브랜드" },
  { id: 3, rank: 3, brandName: "브랜드" },
]

const Search = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <TopBar
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
        rightIcon={
          <SearchInput value={searchText} onChangeText={setSearchText} />
        }
      />
      <Content>
        {searchText ? (
          <RecentSearchWrapper>
            {searchKeyword.map((keyword, index) => (
              <RecentSearches key={index} keyword={keyword} />
            ))}
          </RecentSearchWrapper>
        ) : (
          <>
            <Section>
              <SectionHeader>
                <Font text="최근 검색어" kind="semi18" />
                <Font text="지우기" kind="medium16" color="gray500" />
              </SectionHeader>
              <HorizontalTagList>
                {recently.map((item, index) =>
                  <Tag key={index} text={item} />
                )}
              </HorizontalTagList>
            </Section>

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
          </>
        )}
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
