import styled from 'styled-components/native';
import { color, Font } from '../../../styles';
import { Button, Input, TopBar } from '../../../components';
import { Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { addAddress, AddAddressRequest } from '../../../apis/address';

const Add = () => {
  const navigation = useNavigation();

  const [postNumber, setPostNumber] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [addressName, setAddressName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');

  const postAddress = async () => {
    try {
      const requestData: AddAddressRequest = {
        postNumber: postNumber,
        address: address,
        detailAddress: detailAddress,
        addressName: addressName,
        personName: personName,
        phone: phone
      };
      const response = await addAddress(requestData);
      if (response.status == 200) {
        navigation.goBack();
      } else {
        Alert.alert('배송지 등록 실패');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AddAddressContainer>
      <TopBar
        text="배송지 관리"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <FormWrapper>
        <FormSection>
          <Font text="주소" kind="semi16" color="gray600" />
          <RowInputWrapper>
            <Input
              width="280px"
              placeholder="우편번호를 입력해주세요."
              value={postNumber}
              onChangeText={setPostNumber}
            />
            <Button text="찾기" width="80px" />
          </RowInputWrapper>
          <Input
            placeholder="주소지를 입력해주세요."
            value={address}
            onChangeText={setAddress}
          />
          <Input
            placeholder="상세주소를 입력해주세요."
            value={detailAddress}
            onChangeText={setDetailAddress}
          />
        </FormSection>

        <FormSection>
          <Font text="배송지명" kind="semi16" color="gray600" />
          <Input
            placeholder="집, 회사 등 배송지명을 입력해주세요."
            value={addressName}
            onChangeText={setAddressName}
          />
        </FormSection>

        <FormSection>
          <Font text="수령인" kind="semi16" color="gray600" />
          <Input
            placeholder="이름을 입력해주세요."
            value={personName}
            onChangeText={setPersonName}
          />
        </FormSection>

        <FormSection>
          <Font text="전화번호" kind="semi16" color="gray600" />
          <Input
            placeholder="전화번호를 입력해주세요."
            value={phone}
            onChangeText={setPhone}
          />
        </FormSection>
      </FormWrapper>

      <ButtonWrapper>
        <Button
          text="저장하기"
          onPress={() => {
            if (
              !postNumber ||
              !address ||
              !detailAddress ||
              !addressName ||
              !personName ||
              !phone
            ) {
              Alert.alert('모두 입력해주세요');
            } else {
              postAddress();
            }
          }}
        />
      </ButtonWrapper>
    </AddAddressContainer>
  );
};

const AddAddressContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 24px;
  padding-top: 62px;
  background-color: ${color.white};
`;

const FormWrapper = styled.View`
  padding: 50px 20px;
  flex-direction: column;
  gap: 24px;
`;

const FormSection = styled.View`
  flex-direction: column;
  gap: 8px;
`;

const RowInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background-color: ${color.white};
`;

export default Add;
