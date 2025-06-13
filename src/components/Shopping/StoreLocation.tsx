import styled from "styled-components/native";
import { Font, color } from "../../styles"

interface StoreLocationProps {
  name?: string,
  address?: string,
}

const StoreLocation = ({ name, address }: StoreLocationProps) => {
  return (
    <StoreContainer>
      <Font text={name} kind="semi18" />
      <Font text={address} kind="medium16" color="gray600" />
    </StoreContainer>
  )
}

const StoreContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.pink300};
  background-color: ${color.white};
`

export default StoreLocation