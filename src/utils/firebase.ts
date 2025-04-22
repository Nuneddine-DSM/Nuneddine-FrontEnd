import messaging from '@react-native-firebase/messaging';

export const getDeviceToken = async (): Promise<string> => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (!enabled) {
    throw new Error('푸시 알림 권한이 거부되었습니다');
  }

  const token = await messaging().getToken();

  if (!token) {
    throw new Error('토큰을 가져올 수 없습니다');
  }

  return token;
};
