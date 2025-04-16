import styled from "styled-components/native";
import Logo from "../../assets/Logo.png"
import { Bell, Basket } from "../../assets";

const Header = () => {
  return (
    <Container>
      <LogoImage source={Logo} />
      <IconWrapper>
        <Bell size={34} color={'red'} onPress={() => {}} />
        <Basket size={34} color={'red'} onPress={() => {}} />
      </IconWrapper>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: white;
`

const LogoImage = styled.Image`
  width: 130px;
  height: 32px;
  resize-mode: contain;
`

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default Header