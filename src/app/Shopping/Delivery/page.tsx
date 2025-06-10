import styled from 'styled-components/native';
import { Font, color } from '../../../styles';
import { TopBar } from '../../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow, Check } from '../../../assets';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { getAddress } from '../../../apis/address';
import { AddressResponse } from '../../../interface';
import { useAddressStore } from '../../../stores/addressStore';

const Delivery = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { data: AddressData } = useQuery({
    queryKey: ["Delivery"],
    queryFn: getAddress
  })

  const selectedAddressId = useAddressStore((state) => state.selectedAddressId);
  const setSelectedAddressId = useAddressStore((state) => state.setSelectedAddressId);

  const onPress = (id: number) => {
    setSelectedAddressId(id);
  };

  return (
    <Container>
      <TopBar
        text="배송지 목록"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <DeliveryListWrapper>
        {AddressData?.data?.addresses.map((item: AddressResponse) => {
          const isChecked = item.id === selectedAddressId;

          return (
            <Wrapper key={item.id} selected={isChecked} onPress={() => onPress(item.id)}>
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
                  <CheckButton selected={isChecked}>
                    {isChecked && <Check size={19} color={color.white} />}
                  </CheckButton>
                </UserDetails>

                <Font
                  text={item.detail_address}
                  kind="regular16"
                  color="gray600"
                />
              </HeaderSection>
            </Wrapper>
          )
        })}

        <AddButton onPress={() => navigation.navigate("DeliverAdd")}>
          <Font text="배송지 추가하러 가기" kind="medium16" color="gray500" />
          <Arrow size={20} color={color.gray500} rotate="right" />
        </AddButton>
      </DeliveryListWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.white};
`;

const DeliveryListWrapper = styled.View`
  flex-direction: column;
  padding: 35px 18px;
  gap: 16px;
`;

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
`;

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

const CheckButton = styled.View<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border-width: 1px;
  border-color: ${({ selected }) => selected ? color.pink300 : color.gray400};
  background-color: ${({ selected }) => selected ? color.pink300 : color.white};
`

export default Delivery;
