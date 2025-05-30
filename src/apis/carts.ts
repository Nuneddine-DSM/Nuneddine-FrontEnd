import { instance } from "./axios";
import { getItem } from "../utils/asyncStorage"

const carts = '/carts';

export const getCartLensList = async () => {
  try {
    const response = await instance.get(`${carts}/lens`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export const getCartGlassList = async () => {
  try {
    const response = await instance.get(`${carts}/glasses`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export const addCartItem = async (
  shopId: number,
  lensPower: number,
  count: number
) => {
  try {
    await instance.post(
      `${carts}/${shopId}`,
      {
        lens_power: lensPower,
        count
      },
      {
        headers: {
          Authorization: `Bearer ${await getItem('accessToken')}`,
        },
      }
    );
  } catch (err) {
    throw err;
  }
};

export const deleteCartItem = async (cartIds: Array<number>) => {
  try {
    const response = await instance.delete(`${carts}`, {
      data: {
        cart_ids: cartIds
      },
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export const updateOption = async (cartId: number, lensPower: number, count: number) => {
  try {
    const response = await instance.patch(`${carts}/${cartId}`,
    { lensPower, count },
    {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      },
    }
    )
    return response;
  } catch (err) {
    throw err;
  }
}