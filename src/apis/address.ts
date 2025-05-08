import { getItem } from '../utils/asyncStorage';
import { instance } from './axios';

const address = '/address';

export const getAddress = async () => {
  try {
    const response = await instance.get(`${address}`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteAddress = async (addressId: number) => {
  try {
    const response = await instance.delete(`${address}/${addressId}`, {
      headers: {
        Authorization: `Bearer ${await getItem('accessToken')}`
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export interface AddAddressRequest {
  postNumber: string;
  address: string;
  detailAddress: string;
  addressName: string;
  personName: string;
  phone: string;
}

export const addAddress = async (data: AddAddressRequest) => {
  try {
    const response = await instance.post(
      `${address}`,
      {
        postNumber: data.postNumber,
        address: data.address,
        detailAddress: data.detailAddress,
        addressName: data.addressName,
        personName: data.personName,
        phone: data.phone
      },
      {
        headers: {
          Authorization: `${await getItem('accessToken')}`
        }
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};
