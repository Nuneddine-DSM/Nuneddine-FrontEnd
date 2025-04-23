import styled from "styled-components/native";
import Logo from "../../assets/Logo.png"
import { Bell, Basket } from "../../assets";
import { color } from "../../styles"

const Header = () => {
  return (
    <Container>
      <LogoImage source={Logo} />
      <IconWrapper>
        <Bell size={34} color={color.gray500} onPress={() => { }} />
        <Basket size={34} color={color.gray500} onPress={() => { }} />
      </IconWrapper>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: ${color.white};
`

const LogoImage = styled.Image`
  width: 130px;
  height: 32px;
  resize-mode: contain;
`

const IconWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`

export default Header