import messaging from '@react-native-firebase/messaging';

export const getDeviceToken = async (): Promise<string> => {
  const token = await messaging().getToken();

  console.log(token);

  if (!token) {
    throw new Error('토큰을 가져올 수 없습니다');
  }

  return token;
};
