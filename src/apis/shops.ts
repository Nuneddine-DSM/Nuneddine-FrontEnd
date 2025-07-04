import { instance } from './axios';
import { getItem } from '../utils/asyncStorage';
import { FilterRequest } from '../interface';

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

export const productPurchase = async () => {
  try {
    const token = await getItem('accessToken');
    const response = await instance.post(
      shops,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (err) {
    console.error('purchase error:', err);
    throw err;
  }
};

export const searchHandler = async (filters: FilterRequest) => {
  const queryParams = new URLSearchParams();

  if (filters.keyword) queryParams.append('keyword', filters.keyword);
  if (filters.frame_shape?.length)
    queryParams.append('frame_shape', filters.frame_shape.join(','));
  if (filters.frame_material?.length)
    queryParams.append('frame_material', filters.frame_material.join(','));
  if (filters.lens_color?.length)
    queryParams.append('lens_color', filters.lens_color.join(','));
  if (filters.lens_date_type?.length)
    queryParams.append('lens_date_type', filters.lens_date_type.join(','));

  const queryString = queryParams.toString();
  
  try {
    const response = await instance.get(`${shops}/search?${queryString}`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    })
    return response.data;
  } catch (err) {
    throw err
  }
}

export const getDetail = async (shopId: number) => {
  try {
    const response = await instance.get(`${shops}/${shopId}`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response.data;
  } catch(err) {
    throw err;
  }
}

export const getLikeLens = async () => {
  try {
    const response = await instance.get(`${shops}/liked/lens`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response.data
  } catch (err) {
    throw err;
  }
}

export const getLikeGlasses = async () => {
  try {
    const response = await instance.get(`${shops}/liked/glasses`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}