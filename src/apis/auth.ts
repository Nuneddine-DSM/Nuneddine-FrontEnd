import { instance, storeData } from './axios';
import { getDeviceToken } from '../utils/firebase';
import { setItem } from '../utils/asyncStorage';

const auth = '/auth';

export interface LoginRequest {
  account_id: string;
  password: string;
  device_token: string;
}

export const loginHandler = async (data: LoginRequest) => {
  const deviceToken = await getDeviceToken();
  const response = await instance.post(`${auth}/login`, {
    account_id: data.account_id,
    password: data.password,
    device_token: deviceToken
  });
  await setItem('accessToken', response.data.access_token);
  return response;
};

interface SignupData {
  name: string;
  id: string;
  password: string;
}

export const signUpHandler = async (data: SignupData) => {
  const deviceToken = await getDeviceToken();
  try {
    const response = await instance.post(`${auth}/signup`, {
      name: data.name,
      account_id: data.id,
      password: data.password,
      device_token: deviceToken
    });

    const accessToken = response.data.access_token;

    if (accessToken) {
      await storeData('accessToken', accessToken);
      await setItem('accessToken', accessToken);
    }

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
