import styled from "styled-components/native";
import { color, Font } from "../../../styles"
import Search from "../../../components/Search";
import { AuthButton } from "../../../components";
import StoreLocation from "../../../components/Shopping/StoreLocation";
import { useState } from "react";

const items = ["안녕", "히히", "예에", "안녕", "히히", "예에", "안녕", "히히"];

const StoreMap = () => {
  const [isSelect, setIsSelect] = useState<boolean>(false);

  return (
    <>
      <ReservationStoreFinderSection>
        <ReservationHeader>
          <Font text="예약 매장 선택" kind="bold20" />
          <Font text="*" kind="bold20" color="pink300" />
        </ReservationHeader>

        <ReservationMap>
          <MapSearchWrapper>
            <MapWrapper></MapWrapper>
            <SearchWrapper>
              <Search item={items} />
              <AuthButton text="선택" width="80px" />
            </SearchWrapper>
          </MapSearchWrapper>

          {isSelect &&
            <StoreLocation
              name="히히"
              address="주소입니다"
              contact="010-1234-1234"
            />
          }

        </ReservationMap>
      </ReservationStoreFinderSection>
    </>
  )
}

const ReservationStoreFinderSection = styled.View`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 8px;
  background-color: ${color.white};
`

const ReservationHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 18px 20px;
`

const ReservationMap = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px 20px 30px;
  gap: 18px;
`

const MapSearchWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const MapWrapper = styled.View`
  width: 100%;
  height: 276px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.gray300};
  overflow: hidden;
`

const SearchWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`

export default StoreMap