import styled from "styled-components/native";
import { Search as SearchIcon } from "../../assets";
import { color } from "../../styles"

interface SearchProps {
  value?: string;
  width?: string;
  onChangeText?: (i: string) => void;
  onKeyPress?: (i: any) => void;
}

const Search = ({
  value,
  onChangeText,
  onKeyPress
}: SearchProps) => {
  return (
    <Container>
      <SearchInput
        value={value}
        placeholder="찾으시는 상품 있으신가요?"
        placeholderTextColor={color.gray400}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
      />
      <IconWrapper>
        <SearchIcon size={28} color={'gray'} />
      </IconWrapper>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  flex: 1;
`

const SearchInput = styled.TextInput`
  width: 100%;
  padding: 18px 16px;
  border-width: 1px;
  border-color: ${color.gray300};
  border-radius: 5px;
  background-color: ${color.white};
  font-size: 16px;
  font-weight: 500;
`

const IconWrapper = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
`

export default Search