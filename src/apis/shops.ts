import { instance } from './axios';

const shops = '/shops';

export const wishlistHandler = async () => {
  try {
    const response = await instance.get(`${shops}/liked`)
    return response
  } catch (err) {
    throw err;
  }
}