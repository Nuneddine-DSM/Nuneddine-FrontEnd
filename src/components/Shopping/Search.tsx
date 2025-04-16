import styled from "styled-components/native";
import { Search as SearchIcon } from "../../assets";

interface SearchProps {
  value?: string;
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
  width: 100%;
`

const SearchInput = styled.TextInput`
  width: 100%;
  padding: 18px 16px;
  border-width: 1px;
  border-color: red;
  border-radius: 5px;
  background-color: white;
`

const IconWrapper = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
`

export default Search