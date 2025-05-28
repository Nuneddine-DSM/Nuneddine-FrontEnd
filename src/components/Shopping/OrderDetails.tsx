import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import Tag from '../../components/Shopping/Tag';
import { OrderDataItemType } from '../../app/MyPage/Data';

const OrderDetails = ({ item }: { item: OrderDataItemType }) => {
  return (
    <Container>
      <TopSection>
        <Image source={{ uri: item.image }} resizeMode="cover" />

        <Details>
          <Section>
            <Font text={item.name} kind="bold16" />
            <Font
              text={item.description}
              kind="medium16"
              style={{ flexWrap: 'wrap' }}
              numberOfLines={2}
              ellipsizeMode="tail"
            />
          </Section>

          <Section>
            {item.type === 'Lens' && <Tag text="한달용" height="32px" />}
            <Font text={`${item.price}원`} kind="bold16" />
          </Section>
        </Details>
      </TopSection>

      <OptionBox>
        <Font
          text={`옵션 : ${1}개 ${
            item.type === 'Lens' ? item.option[0].lensType : ''
          }`}
          kind="regular14"
          color="gray600"
        />
      </OptionBox>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 30px 0;
  gap: 10px;
  border-bottom-width: 2px;
  border-color: ${color.gray100};
  background-color: ${color.white};
`;

const TopSection = styled.View`
  flex-direction: row;
  gap: 14px;
`;

const Image = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 4px;
  background-color: ${color.gray200};
`;

const Details = styled.View`
  width: 248px;
  justify-content: space-around;
`;

const Section = styled.View`
  flex-direction: column;
  gap: 4px;
`;

const OptionBox = styled.View`
  padding: 14px 11px;
  border-radius: 4px;
  background-color: ${color.gray50};
`;

export default OrderDetails;
