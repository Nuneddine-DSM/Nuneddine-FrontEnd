import styled from "styled-components/native";
import { Font, color } from "../../../styles"

interface PropsType {
  id: number,
  rank: number,
  brandName: string
}

const Rank = ({ id, rank, brandName }: PropsType) => {
  return (
    <RankContainer key={id}>
      <Font text={rank} kind="bold18" color="pink300" />
      <Font text={brandName} kind="medium16" />
    </RankContainer>
  )
}

const RankContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px 0;
  gap: 21px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`

export default Rank