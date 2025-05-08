import styled from 'styled-components/native';
import { color } from '../../../styles';
import { Button, TopBar } from '../../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import DeliveryDetail from '../../../components/Shopping/Delivery';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { deleteAddress, getAddress } from '../../../apis/address';
import { DeliveryType } from '../../Shopping/Delivery/page';
import { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

const Delivery = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [addressList, setAddressList] = useState<DeliveryType[]>([]);

  useEffect(() => {
    const myAddress = async () => {
      try {
        const response = await getAddress();
        setAddressList(response.data.addresses);
      } catch (err) {
        console.error(err);
      }
    };

    myAddress();
  }, []);

  const removeAddress = async (index: number, addressId: number) => {
    try {
      const response = await deleteAddress(addressId);
      if (response.status === 200) {
        addressList.splice(index, 1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <TopBar
        text="배송지 관리"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <DeliveryListWrapper>
          {addressList.map((item, index) => (
            <DeliveryDetail
              item={item}
              onPress={() => {
                removeAddress(index, item.addressId || 0);
              }}
            />
          ))}
        </DeliveryListWrapper>
      </ScrollView>

      <ButtonWrapper>
        <Button
          text="배송지 추가"
          onPress={() => {
            navigation.navigate('DeliveryAdd');
          }}
        />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`;

const DeliveryListWrapper = styled.View`
  flex-direction: column;
  padding: 35px 20px;
  gap: 16px;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background-color: ${color.white};
`;

export default Delivery;
