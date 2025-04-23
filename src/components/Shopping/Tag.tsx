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
  padding: 6px 14px;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 24px;
  border-color: ${color.pink300};
`

export default Tag