import styled from "styled-components/native";
import { color, Font } from "../../../styles"
import { Header, Footer } from "../../../components/Main";
import { Tab, ProductCardSmall, Tag } from "../../../components/Shopping";
import { Button } from "../../../components";
import { Heart } from "../../../assets";
import { TabInfoData } from "./Data";
import { useState } from "react";
import { likeHandler } from "../../../apis/heart";

const shopId = 1;

const ShoppingDetail = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [selectedHeart, setSelectedHeart] = useState<boolean>(false);

  const heartHandler = async () => {
    try {
      await likeHandler(shopId);
      setSelectedHeart(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>

        <ProductBanner></ProductBanner>

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
      </Container>

      <BottomActionBar>
        <Heart
          onPress={heartHandler}
          size={28}
          color={selectedHeart ? color.pink300 : color.gray500}
          fill={selectedHeart ? color.pink300 : 'none'}
        />
        <Button text="구매하기" width="90%" />
      </BottomActionBar>
    </>
  )
}

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

const SimilarProductList = styled.View``

const BottomActionBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  gap: 20px;
  background-color: ${color.white};
`

const TagWrapper = styled.View`
  flex-wrap: wrap;
  gap: 8px;
`

export default ShoppingDetail;