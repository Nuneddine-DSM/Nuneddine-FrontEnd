import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { AddressData } from '../../apis/address';

interface PropsType {
  item?: AddressData;
  onPress?: () => void;
}

const MyPageAddress = ({ item, onPress }: PropsType) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Font text={item?.delivery_address_name} kind="semi20" />
        <UserInfoWrapper>
          <Font text={item?.receiver} kind="medium18" />
          <Font text="·" kind="medium18" />
          <Font text={item?.phone_number} kind="medium18" />
        </UserInfoWrapper>
        <Font
          text={`${item?.address}, ${item?.detail_address}`}
          kind="regular16"
          color="gray600"
        />
      </InfoWrapper>
      <DeleteWrapper onPress={onPress}>
        <Font text="삭제" kind="medium16" color="red" />
      </DeleteWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: column;
  padding: 20px 20px 16px;
  gap: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.gray300};
  position: relative;
`;

const DeleteWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${color.red};
  padding: 8px 18px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const InfoWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

const UserInfoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export default MyPageAddress;
