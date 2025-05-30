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
  const token = await authenticatedRequest();
  const response = await instance.get(`${address}`, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export const deleteAddress = async (addressId: number) => {
  const token = await authenticatedRequest();
  const response = await instance.delete(`${address}/${addressId}`, {
    headers: {
      Authorization: token
    }
  });
  return response;
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
  const token = await authenticatedRequest();
  const response = await instance.post(`${address}`, data, {
    headers: {
      Authorization: token
    }
  });
  return response;
};
