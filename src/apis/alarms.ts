import { LensDateType } from '../app/Data';
import { authenticatedRequest } from '../utils/token';
import { instance } from './axios';

const alarms = '/alarms';

export interface MyLensResponse {
  alarm_list: MyLensItemData[];
}

export interface MyLensItemData {
  alarm_id: number;
  name: string;
  date_type: LensDateType;
  start_time: string | null;
  end_time: string | null;
  is_repurchased: boolean;
}

export const getMyLens = async () => {
  const token = await authenticatedRequest();
  const response = await instance.get(`${alarms}`, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export interface AddLensRequest {
  name: string;
  dateType: LensDateType;
}

export const addMyLens = async (data: AddLensRequest) => {
  const token = await authenticatedRequest();
  const response = await instance.post(`${alarms}`, data, {
    headers: {
      Authorization: token
    }
  });
  return response;
};
