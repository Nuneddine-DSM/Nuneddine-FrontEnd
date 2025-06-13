import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { TopBar, Dropdown, Button } from '../../../components';
import { Arrow } from '../../../assets';
import { Font, color } from '../../../styles';
import { Tab, CheckBox, QuantitySelector } from '../../../components/Shopping/index';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Lens from './Lens';
import Amount from '../../../components/Shopping/Amount';
import { CategoryData } from '../../Main/Data';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCartGlassList,
  getCartLensList,
  deleteCartItem,
  updateOption
} from '../../../apis/carts';
import {
  CartGlassesItem,
  CartLensItem
} from '../../../components/Shopping/index';
import { CartItemType, CartResponseType } from '../../../interface';
import { AxiosResponse } from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const queryClient = useQueryClient();

  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedDeleteIds, setSelectedDeleteIds] = useState<number[]>([]);

  const [glassesCounts, setGlassesCounts] = useState<Record<number, number>>({});
  const [cartId, setCartId] = useState<number | null>(null);

  const { data: glassesData } = useQuery<AxiosResponse<CartResponseType>>({
    queryKey: ['cartGlassList'],
    queryFn: getCartGlassList
  });

  const { data: lensData } = useQuery<AxiosResponse<CartResponseType>>({
    queryKey: ['cartLensList'],
    queryFn: getCartLensList
  });

  useEffect(() => {
    if (glassesData?.data.cart_list) {
      const initialCounts: Record<number, number> = {};
      glassesData.data.cart_list.forEach(item => {
        initialCounts[item.cart_id] = item.count;
      });
      setGlassesCounts(initialCounts);
    }
  }, [glassesData]);

  const updateCount = (cartId: number, newCount: number) => {
    setGlassesCounts(prev => ({
      ...prev,
      [cartId]: newCount
    }));

    const lensPowerNumber = parseFloat(lensPower);

    mutateUpdateOption({ cartId, lensPower: lensPowerNumber, count: newCount });
  };

  const { mutate: mutateUpdateOption } = useMutation({
    mutationFn: ({ cartId, lensPower, count }: { cartId: number; lensPower: number; count: number }) =>
      updateOption(cartId, lensPower, count),
    onSuccess: (data, variables) => {
      console.log(
        '옵션 변경에 성공했습니다.',
        variables.cartId,
        variables.lensPower,
        variables.count
      );
      if (selectedTab === 1) {
        queryClient.invalidateQueries({ queryKey: ['cartGlassList'] });
      } else {
        queryClient.invalidateQueries({ queryKey: ['cartLensList'] });
      }
    },
    onError: (error, variables) => {
      console.error(
        '옵션 변경에 실패했습니다.',
        error,
        variables.cartId,
        variables.lensPower,
        variables.count
      );
    }
  });

  const selectedData = selectedTab === 1 ? glassesData?.data : lensData?.data;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['60%'], []);

  const [selectedOptionItem, setSelectedOptionItem] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<CartItemType | null>(null);
  const [count, setCount] = useState<number>(1);
  const [lensPower, setLensPower] = useState<string>('0.00');

  const handlePresentModalPress = useCallback(
    (id: number, selectedCount: number) => {
      setCartId(id);
      setCount(selectedCount);
      bottomSheetModalRef.current?.present();
    },
    []
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const toggleSelected = (id: number) => {
    setSelectedDeleteIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSingleDelete = async (id: number) => {
    try {
      await deleteCartItem([id]);
      queryClient.invalidateQueries({
        queryKey: selectedTab === 1 ? ['cartGlassList'] : ['cartLensList']
      });
      setSelectedDeleteIds(prev => prev.filter(itemId => itemId !== id));
    } catch {
      console.log('삭제 실패');
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await deleteCartItem(selectedDeleteIds);
      queryClient.invalidateQueries({
        queryKey: selectedTab === 1 ? ['cartGlassList'] : ['cartLensList']
      });
      setSelectedDeleteIds([]);
    } catch {
      console.log('삭제 실패');
    }
  };

  const handleAllSelect = () => {
    const currentList =
      selectedTab === 1
        ? glassesData?.data.cart_list
        : lensData?.data.cart_list;
    if (!currentList) return;
    const allIds = currentList.map(item => item.cart_id);
    setSelectedDeleteIds(prev => (prev.length === allIds.length ? [] : allIds));
  };

  const handleBuyProduct = () => {
    if (selectedTab == 1) {
      navigation.navigate('Payment');
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'MainTabs',
            state: {
              index: 0,
              routes: [{ name: 'Main' }]
            }
          }
        ]
      });
    }
  };

  const onCountChange = (newCount: number) => {
    if (cartId !== null) {
      setCount(newCount);
      setGlassesCounts(prev => ({ ...prev, [cartId]: newCount }));
    }
  };

  return (
    <>
      <TopBar
        text="장바구니"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      <ContainerWrapper>
        <ScrollContainer>
          <Tab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabData={CategoryData}
          />

          <SelectWrapper>
            <AllSelectWrapper>
              <CheckBox
                selected={selectedDeleteIds.length === selectedData?.carts_count}
                onPress={handleAllSelect}
              />
              <Font text="전체 선택" kind="medium16" />
            </AllSelectWrapper>
            <TouchableOpacity onPress={handleDeleteSelected}>
              <Font text="선택 삭제" kind="medium16" />
            </TouchableOpacity>
          </SelectWrapper>

          <ProductCountWrapper>
            <Font
              text={`${selectedData?.carts_count ?? 0}개의 상품이 있습니다.`}
              kind="medium16"
            />
          </ProductCountWrapper>

          {selectedTab === 1 &&
            glassesData?.data.cart_list.map((item: CartItemType) => (
              <CartGlassesItem
                key={item.cart_id}
                item={item}
                isSelected={selectedDeleteIds.includes(item.cart_id)}
                onToggleSelect={() => toggleSelected(item.cart_id)}
                onDelete={() => handleSingleDelete(item.cart_id)}
                count={glassesCounts[item.cart_id] ?? item.count}
                onCountChange={newCount => updateCount(item.cart_id, newCount)}
              />
            ))}

          {selectedTab === 2 &&
            lensData?.data.cart_list.map((item: CartItemType) => (
              <CartLensItem
                key={item.cart_id}
                item={item}
                isSelected={selectedDeleteIds.includes(item.cart_id)}
                onToggleSelect={() => toggleSelected(item.cart_id)}
                onDelete={() => handleSingleDelete(item.cart_id)}
                count={glassesCounts[item.cart_id] ?? item.count}
                onCountChange={newCount => updateCount(item.cart_id, newCount)}
                onOptionClick={(clickedItem) => {
                  setSelectedItem(clickedItem);
                  setLensPower(String(clickedItem.lens_power ?? '0.00'));
                  setCount(clickedItem.count);
                  bottomSheetModalRef.current?.present();
                }}
              />
            ))}

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}
          >
            {selectedItem && (
              <OptionWrapper>
                <Font text={`옵션`} kind="medium16" color="gray600" />
                <InputWrapper>
                  <CountInputWrapper>
                    <Font text="수량" kind="medium16" />
                    <QuantitySelector count={count} onChange={setCount} />
                  </CountInputWrapper>
                  <Dropdown
                    value={lensPower}
                    setValue={setLensPower}
                    items={['0.00', '-2.25', '-5.00', '-7.25', '-10.00']}
                  />
                </InputWrapper>
                <ClickButton
                  onPress={() => {
                    updateCount(selectedItem.cart_id, count);
                    bottomSheetModalRef.current?.dismiss();
                  }}
                >
                  <Font text="적용하기" kind="bold16" color="white" />
                </ClickButton>
              </OptionWrapper>
            )}
          </BottomSheetModal>

          {selectedTab === 2 && <Lens />}

          <Amount orderAmount={selectedData?.total_price ?? 0} />
        </ScrollContainer>

        <ButtonWrapper>
          <Button text="상품 구매하기" onPress={handleBuyProduct} buttonColor="black" />
        </ButtonWrapper>
      </ContainerWrapper>
    </>
  );
};

const ContainerWrapper = styled.View`
  flex: 1;
  background-color: ${color.gray50};
  padding-top: 64px;
`;

const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 80
  }
}))``;

const SelectWrapper = styled.View`
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${color.white};
`;

const AllSelectWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProductCountWrapper = styled.View`
  flex-direction: row;
  padding: 10px 20px 12px;
  background-color: ${color.white};
`;

const ButtonWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 7px 20px;
  border-top-width: 1px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`;

const OptionWrapper = styled.View`
  flex-direction: column;
  padding: 47px 26px;
  gap: 26px;
`;

const InputWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const CountInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${color.gray300};
  background-color: ${color.white};
`;

const ClickButton = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  top: 400;
  left: 32;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${color.pink300};
`

export default Cart;
