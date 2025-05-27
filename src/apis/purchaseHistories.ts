import { getItem } from '../utils/asyncStorage';
import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const purchaseHistories = '/purchase_histories';

export interface MyOrderHistoryItemData {
  shopId: number;
  brandName: string;
  glassName: string;
  imageUrls: string[];
  price: number;
  count: number;
  lensPower: number;
  type: 'GLASSES' | 'LENS';
  frameShape: string;
}

export interface MyOrderHistoryData {
  date: string;
  histories: MyOrderHistoryItemData[];
}

export const getMyOrderHistory = async () => {
  try {
    const token = await authenticatedRequest();
    const response = await instance.get(`${purchaseHistories}`, {
      headers: {
        Authorization: token
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};
