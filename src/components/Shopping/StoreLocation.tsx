import styled from "styled-components/native";
import { Font, color } from "../../styles"

interface StoreLocationProps {
  name?: string,
  address?: string,
  contact?: string
}

const StoreLocation = ({ name, address, contact}: StoreLocationProps) => {
  return (
    <StoreContainer>
      <Font text={name} kind="bold20" />
      <Font text={address} kind="medium16" color="gray600" />
      <Font text={`연락처 ) ${contact}`} kind="medium16" color="gray600" />
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
  border-color: ${color.gray300};
  background-color: ${color.white};
`

export default StoreLocation