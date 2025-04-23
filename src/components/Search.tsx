import styled from "styled-components/native";
import { Search as SearchIcon } from "../assets";
import { color, Font } from "../styles"
import { useState } from "react";

interface SearchProps {
  value?: string;
  item?: Array<string>;
  onChangeText?: (i: string) => void;
  onKeyPress?: (i: any) => void;
}

const Search = ({
  value,
  item = [],
  onChangeText,
  onKeyPress
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFind, setIsFind] = useState<boolean>(false);

  return (
    <Container>
      <SearchBoxWrapper isFocused={isFocused}>
        <SearchInput
          value={value}
          placeholder="찾으시는 상품 있으신가요?"
          placeholderTextColor={color.gray400}
          isFocused={isFocused}
          onFocus={() => {
            setIsFocused(true);
            setIsFind(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            setIsFind(false);
          }}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
        />
        <IconWrapper>
          <SearchIcon size={28} color={color.gray500} />
        </IconWrapper>

        {isFind && item?.length > 0 && (
          <SearchResultList>
            <SearchResultScroll>
              {item?.map((value, index) => (
                <SearchItem
                  key={index}
                  backgroundColor={index % 2 == 0}
                >
                  <Font text={value} kind="medium16" />
                </SearchItem>
              ))}
            </SearchResultScroll>
          </SearchResultList>
        )}
      </SearchBoxWrapper>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  flex: 1;
`

const SearchBoxWrapper = styled.View<{ isFocused: boolean }>`
  border-radius: 10px;
  border-width: ${({ isFocused }) => isFocused ? '1px' : '0px'};
  border-color: ${({ isFocused }) => isFocused ? color.black : color.white};
  background-color: ${color.white};
  overflow: hidden;
`

const SearchInput = styled.TextInput<{ isFocused: boolean }>`
  width: 100%;
  padding: 18px 16px;
  border-radius: 10px;
  border-width: ${({ isFocused }) => isFocused ? '0px' : '1px'};
  border-color: ${({ isFocused }) => isFocused ? color.white : color.gray300};
  background-color: ${color.white};
  font-size: 16px;
  font-weight: 500;
`

const IconWrapper = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
`

const SearchResultList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: scroll;
`

const SearchResultScroll = styled.ScrollView`
  flex: 1;
  height: 172px;
  padding: 0 16px 10px;
`;

const SearchItem = styled.View<{ backgroundColor: boolean }>`
  padding: 12px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor ? color.white : color.gray50};
`

export default Search