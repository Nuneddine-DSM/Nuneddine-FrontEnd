import { LensDateType } from '../app/Data';
import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const purchaseHistories = '/purchase_histories';

export interface MyOrderHistoryItemData {
  shop_id: number;
  brand_name: string;
  glass_name: string;
  image_urls: string[];
  price: number;
  count: number;
  lens_power: number;
  type: 'GLASSES' | 'LENS';
  frame_shape: string;
  lens_date_type: LensDateType;
}

export interface MyOrderHistoryData {
  date: string;
  histories: MyOrderHistoryItemData[];
}

export const getMyOrderHistory = async () => {
  const token = await authenticatedRequest();
  const response = await instance.get(`${purchaseHistories}`, {
    headers: {
      Authorization: token
    }
  });
  return response;
};
