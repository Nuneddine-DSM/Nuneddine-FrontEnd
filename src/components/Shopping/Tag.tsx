import styled from "styled-components/native"

interface PropsType {
  text?: string
}

const Tag = ({ text } : PropsType) => {
  return (
    <Container>
      {text}
    </Container>
  )
}

const Container = styled.Text`
  padding: 4px 12px;
  border-width: 1px;
  border-color: red;
  border-radius: 20px;
  align-self: flex-start;
  color: red;
`

export default Tag