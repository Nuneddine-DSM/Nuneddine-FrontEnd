import { instance } from './axios';
import { getItem } from '../utils/asyncStorage';

const shops = '/shops';

export const glassesProduct = async () => {
  try {
    const response = await instance.get(`${shops}/glasses`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export const lensProduct = async () => {
  try {
    const response = await instance.get(`${shops}/lens`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export const wishlistHandler = async () => {
  try {
    const response = await instance.get(`${shops}/liked`);
    return response;
  } catch (err) {
    throw err;
  }
}

export const productPurchase = async () => {
  try {
    const response = await instance.post(`${shops}`);
    return response;
  } catch (err) {
    throw err;
  }
}

export const searchHandler = async () => {
  try {
    const params = new URLSearchParams();
    const response = await instance.get(`${shops}/search`)
    return response;
  } catch (err) {
    throw err
  }
}