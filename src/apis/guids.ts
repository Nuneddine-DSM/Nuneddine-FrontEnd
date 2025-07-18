import { instance } from './axios';
import { getItem } from '../utils/asyncStorage';

const guides = 'guides';

export const getGuides = async () => {
  try {
    const response = await instance.get(`${guides}/list`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    })
    return response.data;
  } catch (err) {
    throw err;
  }
}

export const getGuidesDetail = async (guideId: number) => {
  try {
    const response = await instance.get(`${guides}/${guideId}`)
    return response.data;
  } catch (err) {
    throw err;
  }
}