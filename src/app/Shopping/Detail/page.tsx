import styled from "styled-components/native";
import { color, Font } from "../../../styles"
import { Header, Footer } from "../../../components/Main";
import { Tab, ProductCardSmall, Tag } from "../../../components/Shopping";
import { Button } from "../../../components";
import { Heart } from "../../../assets";
import { TabInfoData } from "./Data";
import { useState, useCallback, useRef, useMemo } from "react";
import { likeHandler } from "../../../apis/heart";
import Banner from "../../Main/Banner";
import {
  BottomSheetModal,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import OrderItem from "./OrderItem";
import { addCartItem } from "../../../apis/carts";
import { BottomButtonsProps } from "../../../interface";

const GlassDummy = require("../../../assets/GlassesDummy.png")

const shopId = 1;
const colorId = 1;

const data = [
  {
    id: 1,
    image: GlassDummy
  }
]

const ShoppingDetail = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedHeart, setSelectedHeart] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number>(1);
  
  const [lensPower, setLensPower] = useState<number>(11.6);
  const [count, setCount] = useState<number>(1)

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

  const handelAddCart = () => {
    handlePresentModalPress();
    addCartItem(shopId, lensPower, count);
  }

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>

        <Banner data={data} />

        <DetailContentWrapper>

          <ProductDetail>
            <ProductInfoSection>
              <ProductTitleWrapper>
                <Font text="브랜드 Name" kind="regular18" color="gray600" />
                <Font
                  text="베리스 레쥬렉션 선글라스 RESURER 어쩌고저쩌고 아무튼 대다 김"
                  kind="bold20"
                  numberOfLines={2}
                />
              </ProductTitleWrapper>
              <TagWrapper>
                <Tag text="굵은테" />
              </TagWrapper>
            </ProductInfoSection>

            <ProductPriceWrapper>
              <Font text="구매가" kind="medium16" color="gray500" />
              <Font text="99,000원" kind="bold24" />
            </ProductPriceWrapper>
          </ProductDetail>

          <AnotherColorWrapper>
            <Font text="다른 컬러 둘러보기" kind="semi24" />
            <ColorProductList>
              <ColorProductItem selected={selectedColor === colorId}></ColorProductItem>
            </ColorProductList>
          </AnotherColorWrapper>

          <>
            <Tab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabData={TabInfoData}
            />
            <ProductImageBox></ProductImageBox>
          </>

          <SimilarProductSection>
            <Font text="비슷한 상품 둘러보기" kind="semi24" />
            <SimilarProductList>
              {/* <ProductCardSmall /> */}
            </SimilarProductList>
          </SimilarProductSection>
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
            <OrderItem />
            <PriceWrapper>
              <Font text="결제 예상 금액" kind="semi18" />
              <Font text="78,000원" kind="bold24" color="pink300" />
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
`

const ProductBanner = styled.View`
  width: 100%;
  height: 430px;
  background-color: ${color.gray200};
  padding: 20px;
`

const AnotherColorWrapper = styled.View`
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: ${color.white};
`

const ColorProductList = styled.ScrollView`
  flex-direction: row;
  gap: 12px;
`

const ColorProductItem = styled.ImageBackground<{ selected: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border-width: 1.5px;
  background-color: ${color.gray100};
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

const SimilarProductSection = styled.View`
  flex-direction: column;
  padding: 25px 20px 45px;
  gap: 25px;
  background-color: ${color.white};
`

const SimilarProductList = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  flex-direction: row;
  gap: 10px;
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

export default ShoppingDetail;