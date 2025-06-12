import { instance } from "./axios";
import { getItem } from "../utils/asyncStorage";

const heart = '/hearts';

export const likeHandler = async (shopId: number) => {
  try {
    const token = await getItem('accessToken');
    await instance.post(`${heart}/${shopId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw err;
  }
};