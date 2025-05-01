import styled from 'styled-components/native';
import { color } from '../../../styles';
import { Button, TopBar } from '../../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import DeliveryDetail from '../../../components/Shopping/Delivery';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DeliveryData } from '../Data';
import { StackNavigationProp } from '@react-navigation/stack';

const Delivery = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

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
          {DeliveryData.map((item) => (
            <DeliveryDetail key={item.id} item={item} />
          ))}
        </DeliveryListWrapper>
      </ScrollView>

      <ButtonWrapper>
        <Button text="배송지 추가" onPress={() => navigation.navigate("DeliverAdd")} />
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
