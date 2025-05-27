import styled from "styled-components/native";
import { color, Font } from "../../../styles"

const Tag = ({ text }: { text: string }) => {
  return (
    <TagBox>
      <Font text={text} kind="medium16" color="gray600" />
    </TagBox>
  )
}

const TagBox = styled.Text`
  padding: 8px 18px;
  border-radius: 20px;
  background-color: ${color.gray50};
`

export default Tag