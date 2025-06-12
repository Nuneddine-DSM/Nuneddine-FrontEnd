import styled from "styled-components/native";
import { Font, color } from "../../styles"
import { AddressResponse } from "../../interface";
import { TouchableOpacity } from "react-native";

interface DeliveryListProps {
  item: AddressResponse;
  isSelected: number;
  onPress: (id: number) => void;
}

const Delivery = ({ item, isSelected, onPress }: DeliveryListProps) => {
  const isChecked = item.id === isSelected;

  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Wrapper selected={isChecked}>
        <HeaderSection>
          <UserDetails>
            <InfoWrapper>
              <Font text={item.address} kind="semi20" />

              <UserInfoWrapper>
                <Font text={item.receiver} kind="medium18" />
                <Font text="･" kind="medium18" />
                <Font text={item.phone_number} kind="medium18" />
              </UserInfoWrapper>
            </InfoWrapper>
            <Tag>
              <Font text="삭제" kind="medium16" color="red" />
            </Tag>
          </UserDetails>

          <Font
            text={item.detail_address}
            kind="regular16"
            color="gray600"
          />
        </HeaderSection>
      </Wrapper>
    </TouchableOpacity>
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

const Tag = styled.TouchableOpacity`
  padding: 8px 18px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${color.red};
`

export default Delivery;
