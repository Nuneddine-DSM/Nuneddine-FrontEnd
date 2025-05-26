import styled from "styled-components/native";
import { Search as SearchIcon } from "../../../assets";
import { color } from "../../../styles"

interface SearchProps {
  value?: string;
  onChangeText?: (i: string) => void;
  onKeyPress?: (i: any) => void;
}

const SearchInput = ({
  value,
  onChangeText,
  onKeyPress
}: SearchProps) => {
  return (
    <Container>
      <SearchBoxWrapper>
        <Input
          value={value}
          placeholder="검색어를 입력해주세요."
          placeholderTextColor={color.gray400}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
        />
        <IconWrapper>
          <SearchIcon size={28} color={color.gray500} />
        </IconWrapper>
      </SearchBoxWrapper>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  flex: 1;
`

const SearchBoxWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.gray100};
  border-radius: 10px;
  overflow: hidden;
`

const Input = styled.TextInput`
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: ${color.gray100};
  font-size: 16px;
  font-weight: 500;
`

const IconWrapper = styled.View`
  padding-right: 16px;
`

export default SearchInput;