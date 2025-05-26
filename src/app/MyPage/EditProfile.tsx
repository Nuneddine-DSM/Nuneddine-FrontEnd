import styled from 'styled-components/native';
import { color } from '../../styles';
import { Input, TopBar, Button } from '../../components';
import { Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { EditProfileParams } from '../../interface/params';
import { modifyProfile, ModifyProfileRequest } from '../../apis/user';

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<EditProfileParams, 'EditProfile'>>();
  const { name, accountId } = route.params;

  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  setNickname(name);
  setId(accountId);

  const changeProfile = async () => {
    try {
      setLoading(true);
      const requestData: ModifyProfileRequest = {
        nickname: nickname
      };
      const response = await modifyProfile(requestData);

      if (response.status === 200) {
        navigation.goBack();
      } else {
        Alert.alert('프로필 수정에 실패하였습니다');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('프로필 수정 실패');
    } finally {
      setLoading(false);
    }
  };

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
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChangeText={setNickname}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            readonly={true}
            value={id}
            onChangeText={setId}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            readonly={true}
            onChangeText={setPassword}
            value={password}
          />
        </InputWrapper>
      </EditSection>

      <ButtonWrapper>
        <Button
          text="수정하기"
          loading={loading}
          onPress={() => {
            changeProfile();
          }}
        />
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
