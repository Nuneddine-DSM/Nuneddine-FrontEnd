import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { Input, TopBar, Button } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TopBar
        text="주문내역"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <EditSection>
        <InputWrapper>
          <Font text="닉네임" kind="semi16" color="gray600" />
          <Input placeholder="닉네임을 입력해주세요" />
        </InputWrapper>
        <InputWrapper>
          <Font text="아이디" kind="semi16" color="gray600" />
          <Input placeholder="아이디를 입력해주세요" />
        </InputWrapper>
        <InputWrapper>
          <Font text="비밀번호" kind="semi16" color="gray600" />
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputWrapper>
      </EditSection>

      <ButtonWrapper>
        <Button text="수정하기" />
      </ButtonWrapper>
    </Container>
  );
};

export default EditProfile;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.white};
`;
const EditSection = styled.View`
  flex-direction: column;
  padding: 50px 20px;
  gap: 24px;
`;

const InputWrapper = styled.View`
  flex-direction: column;
  gap: 8px;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background-color: ${color.white};
`;
