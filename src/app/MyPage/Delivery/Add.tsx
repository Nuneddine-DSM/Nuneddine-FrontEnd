import styled from 'styled-components/native';
import { color, Font } from '../../../styles';
import { Button, Input, TopBar } from '../../../components';
import { Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { addAddress, AddAddressRequest } from '../../../apis/address';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../interface/params';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Add = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'AddressWebview'>>();

  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [addressName, setAddressName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');

  const postAddress = async () => {
    try {
      const formatPhone = formatPhoneNumber(phone);
      const requestData: AddAddressRequest = {
        address: address,
        delivery_address_name: addressName,
        detail_address: detailAddress,
        post_code: postCode,
        receiver: personName,
        phone_number: formatPhone
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
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <TopBar
        text="배송지 관리"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={20}>
        <FormWrapper>
          <FormSection>
            <Font text="주소" kind="semi16" color="gray600" />
            <RowInputWrapper>
              <Input
                width="280px"
                placeholder="우편번호를 입력해주세요."
                value={postCode}
                onChangeText={setPostCode}
                readonly={true}
              />
              <Button
                text="찾기"
                width="80px"
                onPress={() => {
                  navigation.navigate('AddressWebview', {
                    onSelect: ({ zonecode, resultAddress }) => {
                      setPostCode(zonecode);
                      setAddress(resultAddress);
                    }
                  });
                }}
              />
            </RowInputWrapper>
            <Input
              placeholder="주소지를 입력해주세요."
              value={address}
              onChangeText={setAddress}
              readonly={true}
              multiline={true}
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
      </KeyboardAwareScrollView>

      <ButtonWrapper pointerEvents="box-none">
        <Button
          text="저장하기"
          onPress={() => {
            if (
              !postCode ||
              !address ||
              !detailAddress ||
              !addressName ||
              !personName ||
              !phone
            ) {
              Alert.alert('모든 필드를 입력해주세요');
            } else {
              postAddress();
            }
          }}
        />
      </ButtonWrapper>
    </SafeAreaView>
  );
};

const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length < 4) {
    return cleaned;
  } else if (cleaned.length < 7) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  } else {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  }
};

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
