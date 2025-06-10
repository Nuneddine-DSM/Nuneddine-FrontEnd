import { instance } from "./axios";

const heart = '/hearts';

export const likeHandler = async (shopId : number) => {
  try {
    await instance.post(`${heart}/${shopId}`)
  } catch (err) {
    throw err;
  }
}