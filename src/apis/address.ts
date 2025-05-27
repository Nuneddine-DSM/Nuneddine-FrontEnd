import { getItem } from '../utils/asyncStorage';
import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const address = '/address';

export interface AddressData {
  id: number;
  address: string;
  detail_address: string;
  delivery_address_name: string;
  post_code: string;
  receiver: string;
  phone_number: string;
}

export const getAddress = async () => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.get(`${address}`, {
      headers: {
        Authorization: token
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteAddress = async (addressId: number) => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.delete(`${address}/${addressId}`, {
      headers: {
        Authorization: token
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export interface AddAddressRequest {
  address: string;
  delivery_address_name: string;
  detail_address: string;
  post_code: string;
  receiver: string;
  phone_number: string;
}

export const addAddress = async (data: AddAddressRequest) => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.post(
      `${address}`,
      {
        address: data.address,
        delivery_address_name: data.delivery_address_name,
        detail_address: data.detail_address,
        post_code: data.post_code,
        receiver: data.receiver,
        phone_number: data.phone_number
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
