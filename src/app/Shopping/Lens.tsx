import styled from "styled-components/native";
import { Font, color } from "../../styles"
import CartLensItem from "../../components/Shopping/CartLensItem";
import { Input } from "../../components";
import Map from "./Map";

const Lens = () => {
  return (
    <Container>
      <>
        <CartLensItem />
        <CartLensItem />
      </>

      <Map />

      <ReservationFormSection>
        <ReservationHeader>
          <Font text="예약자 정보" kind="bold20" />
          <Font text="*" kind="bold20" color="pink300" />
        </ReservationHeader>

        <ReservationForm>
          <InputWrapper>
            <Font text="예약자명" kind="medium18" color="gray600" />
            <Input
              placeholder="이름을 입력해주세요."
              value=""
              borderRadius={50}
              width="300px"
              padding="18px 20px"
              onChangeText={() => { }}
            />
          </InputWrapper>
          <InputWrapper>
            <Font text="연락처" kind="medium18" color="gray600" />
            <Input
              placeholder="‘-’ 없이 연락처를 입력해주세요."
              value=""
              borderRadius={50}
              width="300px"
              padding="18px 20px"
              onChangeText={() => { }}
            />
          </InputWrapper>
        </ReservationForm>
      </ReservationFormSection>

      <NoticeBox>
        <Font
          text={`[ 안내 사항 ]\n\n본 서비스는 의료기기 관련 규정에 따라\n 렌즈 제품의 택배 배송을 제공하지 않습니다.\n\n렌즈 수령을 원하시는 경우,\n장바구니 내에서 가까운 안경원을 선택해 예약을 진행해 주세요.\n\n해당 예약 정보는 안경원에 전달되며,\n방문 시 안내에 따라 제품을 수령하실 수 있습니다.`}
          kind="regular14"
          color="gray500"
        />
      </NoticeBox>
    </Container>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${color.gray50};
`;

const ReservationHeader = styled.View`
  flex-direction: row;
  padding: 18px 20px;
`;

const ReservationFormSection = styled.View`
  flex-direction: column;
  gap: 8px;
  padding-bottom: 20px;
  background-color: ${color.white};
`;

const ReservationForm = styled.View`
  flex-direction: column;
  padding: 8px 20px 0;
  gap: 15px;
`;

const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;

const NoticeBox = styled.View`
  padding: 26px 20px;
`;

export default Lens
