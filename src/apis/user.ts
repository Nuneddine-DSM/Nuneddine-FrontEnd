import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const user = '/users';

export const myPage = async () => {
  const token = await authenticatedRequest();
  const response = await instance.get(`${user}/my-page`, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export interface LensFrequency {
  left_lens_power: number;
  right_lens_power: number;
}

export const getLensFrequency = async () => {
  const token = await authenticatedRequest();
  const response = await instance.get(`${user}/lens`, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export const setLensFrequency = async (data: LensFrequency) => {
  const token = await authenticatedRequest();
  const response = await instance.patch(`${user}/lens`, data, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export interface ModifyProfileRequest {
  name: string;
}

export const modifyProfile = async (data: ModifyProfileRequest) => {
  const token = await authenticatedRequest();
  const response = await instance.patch(`${user}/info`, data, {
    headers: {
      Authorization: token
    }
  });
  return response;
};
