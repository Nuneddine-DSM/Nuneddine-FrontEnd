import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './env';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

export const setCookie = (cookie: string) => {
  instance.defaults.headers.Cookies = JSON.parse(cookie);
};

export const storeData = async (key: any, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};
