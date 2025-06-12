import styled from "styled-components/native";
import { Font, color } from "../../../styles"
import { Input, TopBar, Button } from "../../../components";
import Amount from "../../../components/Shopping/Amount";
import PaymentMethod from "./PaymentMethod";
import OrderGlassesItem from "../../../components/Shopping/OrderDetails";
import { TouchableOpacity } from "react-native"
import { Arrow } from "../../../assets";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { productPurchase } from "../../../apis/shops";
import { getCartGlassList } from "../../../apis/carts";
import { CartItemType } from "../../../interface";
import { getAddress } from "../../../apis/address";
import { useAddressStore } from "../../../stores/addressStore";
import { useEffect } from "react";

const Payment = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const selectedId = useAddressStore((state) => state.selectedAddressId);
  const setSelectedId = useAddressStore((state) => state.setSelectedAddressId);

  const handlePurchase = async () => {
    try {
      await productPurchase();
      navigation.navigate("OrderComplete");
    } catch (err) {
      console.error(err);
    }
  };

  const { data: glassesData } = useQuery({
    queryKey: ["glassesData"],
    queryFn: getCartGlassList
  })

  const { data: AddressData } = useQuery({
    queryKey: ["Delivery"],
    queryFn: getAddress
  })

  useEffect(() => {
    if (!selectedId && AddressData?.data.addresses.length > 0) {
      setSelectedId(AddressData?.data.addresses[0].id);
    }
  }, [AddressData]);

  const address = AddressData?.data.addresses.find(
    (addr: { id: number }) => addr.id === selectedId
  );

  return (
    <>
      <TopBar
        text="장바구니/결제"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      <Container>
        <DeliveryInfo>
          <DeliveryHeader>
            <RequiredTitle>
              <Font text="배송지 정보" kind="bold20" />
              <Font text="*" kind="bold20" color="pink300" />
            </RequiredTitle>
            <TouchableOpacity onPress={() => navigation.navigate("Delivery")}>
              <Font
                text="배송지 변경"
                kind="medium16"
                color="pink300"
                style={{
                  textDecorationLine: 'underline',
                  textDecorationColor: color.pink300
                }}
              />
            </TouchableOpacity>
          </DeliveryHeader>

          {address && (
            <DeliverySection>
              <Font text={address.delivery_address_name} kind="bold20" />
              <NamePhoneNumber>
                <Font text={`${address.address} ${address.detail_address}`} kind="medium18" />
                <Font text="･" kind="medium18" />
                <Font text={address.phone_number} kind="medium18" />
              </NamePhoneNumber>
              <Font
                text={address.detail_address}
                kind="regular16"
                color="gray600"
              />
              <Input placeholder="배송시 요청사항을 입력해주세요" />
            </DeliverySection>
          )}
        </DeliveryInfo>

        <OrderItemList>
          <ItemHeader>
            <Font text="주문 상품" kind="bold20" />
          </ItemHeader>
          <OrderListWrapper>
            {glassesData?.data.cart_list.map((item: CartItemType) => (
              <OrderGlassesItem key={item.cart_id} item={item} />
            ))}
          </OrderListWrapper>
        </OrderItemList>

        <PaymentMethod />

        <Amount orderAmount={glassesData?.data?.total_price ?? 0} />

        <ButtonWrapper>
          <Button
            text="상품 구매하기"
            buttonColor="black"
            onPress={() => handlePurchase()}
          />
        </ButtonWrapper>
      </Container>
    </>
  );
};

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 64
  }
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`;

const DeliveryInfo = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

const DeliveryHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
`;

const RequiredTitle = styled.View`
  display: flex;
  flex-direction: row;
`;

const DeliverySection = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 20px;
`;

const Tag = styled.Text`
  padding: 4px 15px;
  border-width: 1px;
  border-radius: 30px;
  align-self: flex-start;
`;

const NamePhoneNumber = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const OrderItemList = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

const ItemHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 18px 20px;
`;

const ButtonWrapper = styled.View`
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`;

const OrderListWrapper = styled.View`
  padding: 0 20px;
`

export default Payment;
