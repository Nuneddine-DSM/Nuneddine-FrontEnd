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
  try {
    const response = await instance.post(`${auth}/signup`, {
      name: data.name,
      account_id: data.id,
      password: data.password,
      device_token: deviceToken,
    })

    const { accessToken } = response.data;

    if (accessToken) {
      await storeData('accessToken', accessToken);
    }
    
    return response
  } catch (error) {
    console.log(error);
    throw error;
  }
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