import { getItem } from '../utils/asyncStorage';
import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const user = '/users';

export const myPage = async () => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.get(`${user}/my-page`, {
      headers: {
        Authorization: token
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export interface LensFrequency {
  left_lens_power: number;
  right_lens_power: number;
}

export const getLensFrequency = async () => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.get(`${user}/lens`, {
      headers: {
        Authorization: token
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const setLensFrequency = async (data: LensFrequency) => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.patch(
      `${user}/lens`,
      {
        left_lens_power: data.left_lens_power,
        right_lens_power: data.right_lens_power
      },
      {
        headers: {
          Authorization: token
        }
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export interface ModifyProfileRequest {
  nickname: string;
}

export const modifyProfile = async (data: ModifyProfileRequest) => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.patch(
      `${user}/info`,
      {
        nickname: data.nickname
      },
      {
        headers: {
          Authorization: token
        }
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};
