import styled from "styled-components/native"
import { Font, color } from "../../styles"

interface PropsType {
  text?: string
}

const Tag = ({ text }: PropsType) => {
  return (
    <Container>
      <Font text={text} kind="medium14" color="pink300" />
    </Container>
  )
}

const Container = styled.Text`
  padding: 4px 16px;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${color.pink300};
  align-self: flex-start;
`

export default Tag