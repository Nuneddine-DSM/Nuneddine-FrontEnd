import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { Search } from "../../../assets/index";

interface PropsType {
  keyword: string
}

const RecentSearches = ({ keyword }: PropsType) => {
  return (
    <RecentContainer>
      <Search size={34} color={color.gray300} />
      <Font text={keyword} kind="medium18" />
    </RecentContainer>
  )
}

const RecentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  gap: 20px;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`

export default RecentSearches;