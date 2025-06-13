import styled from "styled-components/native";
import { useEffect } from "react";
import { color, Font } from "../../../styles"
import { Header, Footer } from "../../../components/Main";
import { Tab, Tag } from "../../../components/Shopping";
import { Button } from "../../../components";
import { Heart, X } from "../../../assets";
import { useState, useCallback, useRef, useMemo } from "react";
import { likeHandler } from "../../../apis/heart";
import Banner from "../../Main/Banner";
import { ImageBackground } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { getDetail } from "../../../apis/shops";
import { addCartItem } from "../../../apis/carts";
import { BottomButtonsProps } from "../../../interface";
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from "@tanstack/react-query";
import { FrameShapeMap, LensDateTypeMap } from "../../Data";
import { QuantitySelector } from "../../../components/Shopping";
import Detail from "../../../assets/Detail.png"
import ImageViewer from "./Description";

type RootStackParamList = {
  ShoppingDetail: { shopId: number };
};

const ShoppingDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ShoppingDetail'>>();
  const { shopId } = route.params;

  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedHeart, setSelectedHeart] = useState<boolean>(false);

  const [lensPower, setLensPower] = useState<number>(0);
  const [optionCount, setOptionCount] = useState<number>(1);

  const { data: detail } = useQuery({
    queryKey: ["productDetail", shopId],
    queryFn: () => getDetail(shopId),
    enabled: shopId !== undefined,
  })

  const heartHandler = async () => {
    try {
      await likeHandler(shopId);
      setSelectedHeart(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['55%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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

  useEffect(() => {
    if (detail?.is_liked !== undefined) {
      setSelectedHeart(detail.is_liked);
    }
  }, [detail?.is_liked]);

  const handelAddCart = () => {
    try {
      addCartItem(shopId, lensPower, optionCount);
      bottomSheetModalRef.current?.dismiss();
    } catch (err) {
      console.error("장바구니 담기 오류");
    }
  }

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>

        {/* <Banner data={detail?.image_urls} /> */}
        <BannerWrapper source={{ uri: detail?.image_urls[0] }} />

        <DetailContentWrapper>

          <ProductDetail>
            <ProductInfoSection>
              <ProductTitleWrapper>
                <Font text={detail?.brand_name} kind="regular18" color="gray600" />
                <Font
                  text={detail?.glasses_name}
                  kind="bold20"
                  numberOfLines={2}
                />
              </ProductTitleWrapper>
              <TagWrapper>
                {detail?.frame_shape && (
                  <Tag text={FrameShapeMap[detail.frame_shape as keyof typeof FrameShapeMap]} />
                )}
                {detail?.date_type && (
                  <Tag text={LensDateTypeMap[detail.date_type as keyof typeof LensDateTypeMap]} />
                )}
              </TagWrapper>
            </ProductInfoSection>

            <ProductPriceWrapper>
              <Font text="구매가" kind="medium16" color="gray500" />
              <Font text={`${detail?.price?.toLocaleString()}원`} kind="bold24" />
            </ProductPriceWrapper>
          </ProductDetail>

          <ImageViewer />

          <ProductImageBox>
            {detail?.image_urls.map((image: string, index: number) => (
              <ProductImage key={index} source={{ uri: image }} />
            ))}
          </ProductImageBox>
        </DetailContentWrapper>
        <Footer />
      </Container >

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <OptionWrapper>
          <Font text="옵션 선택" kind="medium16" color="gray600" />
          <ProductItemWrapper>

            <OrderItemContainer>
              <ProductInfoWrapper>
                <ProductNameBox>
                  <Font
                    text={detail?.glasses_name}
                    kind="bold16"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  />
                </ProductNameBox>
                <X size={30} />
              </ProductInfoWrapper>
              <QuantityAndPriceWrapper>
                <QuantitySelector count={optionCount} onChange={setOptionCount} />
                <Font text={`${(detail?.price * optionCount).toLocaleString()}원`} kind="bold18" />
              </QuantityAndPriceWrapper>
            </OrderItemContainer>

            <PriceWrapper>
              <Font text="결제 예상 금액" kind="semi18" />
              <Font
                text={`${((detail?.price) * optionCount).toLocaleString()}원`}
                kind="bold24"
                color="pink300"
              />
            </PriceWrapper>
          </ProductItemWrapper>
        </OptionWrapper>

        <BottomButtons
          hearted={selectedHeart}
          onHeartPress={heartHandler}
          buttonText="장바구니 담기"
          onButtonPress={handelAddCart}
        />
      </BottomSheetModal>

      <BottomActionBar>
        <Heart
          onPress={heartHandler}
          size={28}
          color={selectedHeart ? color.pink300 : color.gray500}
          fill={selectedHeart ? color.pink300 : 'none'}
        />
        <Button
          text="상품 구매하기"
          width="90%"
          onPress={() => handlePresentModalPress()}
        />
      </BottomActionBar>

      <BottomButtons
        hearted={selectedHeart}
        onHeartPress={heartHandler}
        buttonText="상품 구매하기"
        onButtonPress={handlePresentModalPress}
      />
    </>
  )
}

const BottomButtons = ({ hearted, onHeartPress, buttonText, onButtonPress }: BottomButtonsProps) => (
  <BottomActionBar>
    <Heart
      onPress={onHeartPress}
      size={28}
      color={hearted ? color.pink300 : color.gray500}
      fill={hearted ? color.pink300 : 'none'}
    />
    <Button
      text={buttonText}
      width="90%"
      onPress={onButtonPress}
      buttonColor="black"
      textColor="white"
    />
  </BottomActionBar>
);

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  flex: 1;
  background-color: ${color.white};
  position: relative; 
`
const ProductImage = styled.Image`
  width: 100%;
`

const BannerWrapper = styled.Image`
  width: 100%;
  height: 430px;
`

const DetailContentWrapper = styled.View`
  flex-direction: column;
  gap: 15px;
  background-color: ${color.gray50};
`

const ProductDetail = styled.View`
  flex-direction: column;
  padding: 22px 20px;
  gap: 16px;
  background-color: ${color.white};
`

const ProductInfoSection = styled.View`
  flex-direction: column;
  padding: 0 0 22px;
  gap: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray300};
`

const ProductTitleWrapper = styled.View`
  flex-direction: column;
  gap: 8px;
`

const ProductImageBox = styled.View``

const ProductPriceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const BottomActionBar = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  gap: 20px;
  background-color: ${color.white};
  z-index: 100;
`

const TagWrapper = styled.View`
  flex-wrap: wrap;
  gap: 8px;
`

const OptionWrapper = styled.View`
  flex-direction: column;
  padding: 24px 26px 16px;
  gap: 16px;
`

const ProductItemWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
`

const PriceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 12px;
  border-top-width: 1px;
  border-color: ${color.gray300};
`

const OrderItemContainer = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 20px;
  gap: 22px;
  border-radius: 8px;
  background-color: ${color.gray50};
`

const ProductInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 7px;
`

const ProductNameBox = styled.View`
  flex: 1;
`

const QuantityAndPriceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default ShoppingDetail;