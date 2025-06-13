import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { TopBar } from '../../components';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  getMyOrderHistory,
  MyOrderHistoryData
} from '../../apis/purchaseHistories';
import MyHistoryItem from '../../components/MyPage/OrderGlassItem';
import { StackNavigationProp } from '@react-navigation/stack';

const OrderDetails = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [myOrderList, setMyOrderList] = useState<MyOrderHistoryData[]>([]);
  const [loading, setLoading] = useState(false);

  const prevPage = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getMyOrder = async () => {
      try {
        setLoading(true);
        const response = await getMyOrderHistory();
        setMyOrderList(response.data.purchaseHistories);
      } catch (err) {
        Alert.alert('주문 내역을 불러오는 데 실패하였습니다');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getMyOrder();
  }, []);

  return (
    <Container>
      <TopBar
        text="주문내역"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <OrderWrapper>
          {myOrderList ? (
            myOrderList.map((order, index) => (
              <OrderSection key={`${order.date}-${index}`}>
                <DateWrapper>
                  <Font text={order.date} kind="bold24" />
                </DateWrapper>
                <OrderList>
                  {order.histories.map(item => (
                    <MyHistoryItem item={item} />
                  ))}
                </OrderList>
              </OrderSection>
            ))
          ) : (
            <Font
              style={{
                marginTop: 40,
                marginStart: 20
              }}
              text="주문내역이 존재하지 않습니다"
              kind="semi16"
              color="gray400"
            />
          )}
        </OrderWrapper>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  background-color: ${color.gray50};
`;

const OrderWrapper = styled.ScrollView`
  margin-top: 62px;
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 100px;
`;

const OrderSection = styled.View`
  padding: 15px 20px;
  background-color: ${color.white};
`;

const DateWrapper = styled.View`
  padding: 8px 0;
`;

const OrderList = styled.View`
  flex-direction: column;
`;

export default OrderDetails;
