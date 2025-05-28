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
}
