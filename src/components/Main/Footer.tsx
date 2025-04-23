import styled from "styled-components/native";
import { FooterData } from "../../app/Main/Data";
import { Inster, Message } from "../../assets";
import { color, Font } from "../../styles"

const Footer = () => {
  const SNSIcons = [
    { id: "inster", Icon: Inster },
    { id: "message", Icon: Message }
  ];

  return (
    <Container>
      <InfoSection>
        {FooterData.map(({ id, title, info }) => (
          <InfoRow key={id}>
            <Font text={title} kind="medium14" color="gray500" />
            <Font text={info} kind="semi14" color="gray600" />
          </InfoRow>
        ))}
      </InfoSection>

      <SNSSection>
        {SNSIcons.map(({ id, Icon }) => (
          <IconWrapper key={id}>
            <Icon size={14} color={color.white} />
          </IconWrapper>
        ))}
      </SNSSection>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  padding: 34px 20px 40px;
  gap: 24px;
  border-top-width: 2px;
  border-color: ${color.gray200};
  background-color: ${color.gray50};
`

const InfoSection = styled.View`
  flex-direction: column;
  gap: 15px;
`

const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`

const SNSSection = styled.View`
  flex-direction: row;
  gap: 9px;
`;

const IconWrapper = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${color.gray200};
`

export default Footer