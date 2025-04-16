import styled from "styled-components/native";
import { FooterData } from "../../app/Main/Data";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoSection>
        {FooterData.map(({ id, title, info }) => (
          <FooterInfoItem key={id}>
            <FooterLabel>{title}</FooterLabel>
            <FooterText>{info}</FooterText>
          </FooterInfoItem>
        ))}
      </FooterInfoSection>

      <FooterSNSSection>
        <SNSIcon></SNSIcon>
        <SNSIcon></SNSIcon>
      </FooterSNSSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 20px;
  border-top-width: 2px;
  border-color: red;
`

const FooterInfoSection = styled.View`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FooterInfoItem = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`

const FooterLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: gray;
`

const FooterText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: gray;
`

const FooterSNSSection = styled.View`
  display: flex;
  flex-direction: row;
  gap: 9px;
`

const SNSIcon = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: red;
`

export default Footer