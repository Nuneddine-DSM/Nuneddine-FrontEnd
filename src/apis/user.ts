import AsyncStorage from '@react-native-async-storage/async-storage';
import { instance, setCookie, storeData } from './axios';
import messaging from '@react-native-firebase/messaging';

const auth = '/auth';

interface SignupData {
  name: string,
  id: string,
  password: string,
}

export const signUpHandler = async (data: SignupData) => {
  const deviceToken = await getDeviceToken();
  return await instance
    .post(`${auth}/signup`, {
      name: data.name,
      account_id: data.id,
      password: data.password,
      device_token: deviceToken,
    })
    .then()
    .catch(err => {
      console.log(err);
      throw err
    });
};

export async function getDeviceToken() {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (error) {
    console.error('디바이스 토큰을 가져오는 중 오류가 발생하였습니다.', error);
    return ''
  }
}