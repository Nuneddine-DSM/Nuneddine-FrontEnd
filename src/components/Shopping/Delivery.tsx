import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { Check } from '../../assets';
import { DeliveryType } from '../../app/Shopping/Delivery/page';

interface PropsType {
  item?: DeliveryType;
  onPress?: () => void;
}

const Delivery = ({ item, onPress }: PropsType) => {
  return (
    <Wrapper selected={item?.selected}>
      <HeaderSection>
        <UserDetails>
          <InfoWrapper>
            <Font text={item?.nickName} kind="semi20" />

            <UserInfoWrapper>
              <Font text={item?.name} kind="medium18" />
              <Font text="･" kind="medium18" />
              <Font text={item?.phone} kind="medium18" />
            </UserInfoWrapper>
          </InfoWrapper>
          <CheckIconWrapper selected={item?.selected}>
            {item?.check ? (
              <Check size={19} color="white" />
            ) : (
              <Tag onPress={onPress}>
                <Font text="삭제" kind="medium16" color="pink300" />
              </Tag>
            )}
          </CheckIconWrapper>
        </UserDetails>

        <Font text={item?.address} kind="regular16" color="gray600" />
      </HeaderSection>
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity<{ selected?: boolean }>`
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? color.pink200 : color.gray300)};
`;

const HeaderSection = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const InfoWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const UserDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckIconWrapper = styled.View<{ selected?: boolean }>`
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? color.pink300 : color.gray400)};
  background-color: ${({ selected }) =>
    selected ? color.pink300 : color.white};
`;

const Tag = styled.TouchableOpacity`
  padding: 8px 18px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${color.pink300};
`;

export default Delivery;
