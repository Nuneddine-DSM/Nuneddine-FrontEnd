import instance from './axios';

export interface LoginRequest {
  account_id: string;
  password: string;
  device_token: string;
}

const auth = '/auth';

export const loginHandler = async (data: LoginRequest) => {
  console.log('로그인 핸들러 호출');
  try {
    const response = await instance.post(`${auth}/login`, data);
    return response;
  } catch (err) {
    throw err;
  }
};
