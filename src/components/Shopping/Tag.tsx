import styled from "styled-components/native"
import { Font, color } from "../../styles"

interface PropsType {
  text?: string,
  isDark?: boolean,
  height?: string
}

const Tag = ({ text, isDark = false, height='none' }: PropsType) => {
  return (
    <Container isDark={isDark} height={height}>
      <Font
        text={text}
        kind="medium14"
        color={isDark ? "white" : "pink300"}
      />
    </Container>
  )
}

const Container = styled.Text<{ isDark: boolean, height: string }>`
  height: ${({ height }) => height};
  padding: 6px 14px;
  justify-content: center;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 24px;
  border-color: ${({ isDark }) => isDark ? color.gray600 : color.pink300};
  background-color: ${({ isDark }) => isDark ? color.gray700 : color.white};
`

export default Tag