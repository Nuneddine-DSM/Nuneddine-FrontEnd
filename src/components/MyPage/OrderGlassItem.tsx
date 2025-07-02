import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { MyOrderHistoryItemData } from '../../apis/purchaseHistories';
import { Tag } from '../Shopping';
import { LensDateTypeMap } from '../../app/Data';

const MyHistoryItem = ({ item }: { item: MyOrderHistoryItemData }) => {
  return (
    <Container>
      <ProductInfoSection>
        <ProductImage src={item.image_urls[0]} />
        <ProductDetails>
          <TitleBlock>
            <Font text={item.brand_name} kind="bold16" />
            <Font
              text={item.glass_name}
              kind="medium16"
              style={{ flexWrap: 'wrap' }}
              // numberOfLines={2}
              // ellipsizeMode="tail"
            />
          </TitleBlock>
          <CategoryPriceBlock>
            {/* {item.type === 'LENS' && (
              <Tag text={LensDateTypeMap[item.lens_date_type]} />
            )} */}
            <Font text={`${item.price.toLocaleString()}원`} kind="bold16" />
          </CategoryPriceBlock>
        </ProductDetails>
      </ProductInfoSection>
      <CountWrapper>
        <Font
          text={`옵션 : ${item.count}개 ${
            item.type === 'LENS' ? ' / ' + item.lens_power : ''
          }`}
          kind="regular14"
          color="gray600"
        />
      </CountWrapper>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  border-bottom-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.white};
`;

const ProductInfoSection = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const ProductImage = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 4px;
  background-color: ${color.gray300};
`;

const ProductDetails = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const TitleBlock = styled.View`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 4px;
`;

const CategoryPriceBlock = styled.View`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const CountWrapper = styled.View`
  width: 100%;
  background-color: ${color.gray50};
  padding: 14px 11px;
  flex-direction: row;
`;

export default MyHistoryItem;
