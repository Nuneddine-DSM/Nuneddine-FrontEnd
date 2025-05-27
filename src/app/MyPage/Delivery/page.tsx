import styled from 'styled-components/native';
import { color } from '../../../styles';
import { Button, TopBar } from '../../../components';
import { Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AddressData, deleteAddress, getAddress } from '../../../apis/address';
import { useCallback, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import MyPageAddress from '../../../components/MyPage/Address';

const Delivery = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [addressList, setAddressList] = useState<AddressData[]>([]);

  useFocusEffect(
    useCallback(() => {
      const myAddress = async () => {
        try {
          const response = await getAddress();
          setAddressList(response.data.addresses);
        } catch (err) {
          console.error(err);
          Alert.alert('배송지 정보를 불러오는 데 실패했습니다');
        }
      };

      myAddress();
    }, [])
  );

  const removeAddress = async (index: number, addressId: number) => {
    try {
      const response = await deleteAddress(addressId);
      if (response.status === 200) {
        const updatedList = [...addressList];
        updatedList.splice(index, 1);
        setAddressList(updatedList);
      } else {
        console.log(response);
        Alert.alert('배송지 삭제 실패');
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
            <MyPageAddress
              key={item.id}
              item={item}
              onPress={() => {
                Alert.alert(
                  '배송지 삭제',
                  `${item.delivery_address_name}을 삭제하시겠습니까?`,
                  [
                    { text: '취소', style: 'cancel' },
                    {
                      text: '삭제',
                      style: 'destructive',
                      onPress: () => removeAddress(index, item.id)
                    }
                  ]
                );
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
          buttonColor="black"
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
