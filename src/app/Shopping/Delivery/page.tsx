import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { TopBar } from "../../../components";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../../assets";
import DeliveryList from "../../../components/Shopping/DeliveryList";

export interface DeliveryType {
  selected?: boolean,
  nickName?: string,
  name?: string,
  phone?: string,
  address?: string
}

const DeliveryData: DeliveryType[] = [
  {
    selected: true,
    nickName: "제 2의 집",
    name: "박예빈",
    phone: "010-1234-1234",
    address: "대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)"
  },
  {
    selected: false,
    nickName: "대마고",
    name: "임다영",
    phone: "010-1234-1234",
    address: "대전광역시 유성구 가정북로 76 (장동, 대덕소프트웨어마이스터고등학교), 우정관 택배함(기숙사)"
  },
]

const Delivery = () => {
  return (
    <Container>
      <TopBar
        text="배송지 목록"
        leftIcon={
          <TouchableOpacity onPress={() => { }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <DeliveryListWrapper>
        {DeliveryData.map((item, index) => (
          <DeliveryList key={index} item={item} />
        ))}
        <AddButton>
          <Font text="배송지 추가하러 가기" kind="medium16" color="gray500" />
          <Arrow size={20} color={color.gray500} rotate="right" />
        </AddButton>
      </DeliveryListWrapper>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.white};
`

const DeliveryListWrapper = styled.View`
  flex-direction: column;
  padding: 35px 18px;
  gap: 16px;
`

const AddButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${color.gray300};
`

export default Delivery