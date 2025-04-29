import { instance } from "./axios";

const heart = '/heart';

export const likeHandler = async (shopId : number) => {
  try {
    const response = await instance.post(`${heart}/${shopId}`)
    return response;
  } catch (err) {
    throw err;
  }
}