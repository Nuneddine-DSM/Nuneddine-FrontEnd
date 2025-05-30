import styled from 'styled-components/native';
import { Font, color } from '../../../styles';
import { TopBar } from '../../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import DeliveryList from '../../../components/Shopping/Delivery';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { getAddress } from '../../../apis/address';
import { AddressResponse } from '../../../interface';
import { useState, useEffect } from 'react';

const Delivery = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const { data: AddressData } = useQuery({
    queryKey: ["Delivery"],
    queryFn: getAddress
  })

  const [isSelected, setIsSelected] = useState<number>(AddressData?.data?.[0]?.id ?? 0);

  useEffect(() => {
    if (AddressData?.data?.[1]?.id) {
      setIsSelected(AddressData.data[1].id);
    }
  }, [AddressData]);

  return (
    <Container>
      <TopBar
        text="배송지 목록"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <DeliveryListWrapper>
        {AddressData?.data?.addresses.map((item: AddressResponse) => (
          <DeliveryList key={item.id} item={item} isSelected={isSelected} />
        ))}
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

export default Delivery;
