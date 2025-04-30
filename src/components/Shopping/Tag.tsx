import styled from "styled-components/native"
import { Font, color } from "../../styles"

interface PropsType {
  text?: string,
  isDark?: boolean
}

const Tag = ({ text, isDark = false }: PropsType) => {
  return (
    <Container isDark={isDark}>
      <Font
        text={text}
        kind="medium14"
        color={isDark ? "white" : "pink300"}
      />
    </Container>
  )
}

const Container = styled.Text<{ isDark: boolean }>`
  padding: 6px 14px;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 24px;
  border-color: ${({ isDark }) => isDark ? color.gray600 : color.pink300};
  background-color: ${({ isDark }) => isDark ? color.gray700 : color.white};
`

export default Tag