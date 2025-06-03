import styled from "styled-components/native";
import Logo from "../../assets/Logo.png"
import { color } from "../../styles"
import { Bell, Basket, Search } from "../../assets";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from "react-native";

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Container>
      <TouchableOpacity onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }]
        })
      }}>
        <LogoImage source={Logo} />
      </TouchableOpacity>

      <IconWrapper>
        <Search
          size={34}
          color={color.gray500}
          onPress={() => navigation.navigate('Search')}
        />
        <Bell
          size={34}
          color={color.gray500}
          onPress={() => navigation.navigate('')}
        />
        <Basket
          size={34}
          color={color.gray500}
          onPress={() => navigation.navigate('Cart')}
        />
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