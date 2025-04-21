import styled from "styled-components/native";
import { Font, color } from "../../styles"

const StoreLocation = () => {
  return (
    <StoreContainer>
      <Font text="아이뷰 안경" kind="bold20" />
      <Font text="대전광역시 유성구 가정북로 76" kind="medium16" color="gray600" />
      <Font text="연락처 ) 042-866-8822" kind="medium16" color="gray600" />
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