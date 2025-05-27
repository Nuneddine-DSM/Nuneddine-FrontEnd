import { getItem } from './asyncStorage';

export const authenticatedRequest = async () => {
  const token = await getItem('accessToken');
  if (!token) {
    throw Error('No Access Token Found');
  }
  return `Bearer ${token}`;
};
