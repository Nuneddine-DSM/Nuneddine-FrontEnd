import notifee, { AndroidImportance } from '@notifee/react-native';
import { Platform } from 'react-native';
import messaging, {
  FirebaseMessagingTypes
} from '@react-native-firebase/messaging';

export const requestNotificationPermissionAndCreateChannel = async () => {
  try {
    await notifee.createChannel({
      id: 'default',
      name: '기본 채널',
      importance: AndroidImportance.HIGH
    });

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const settings = await notifee.requestPermission();
      if (settings.authorizationStatus === 0) {
        console.log('알림 권한 거부');
      } else {
        console.log('알림 권한 수락');
      }
    }
    await messaging().requestPermission();
  } catch (err) {
    console.error(err);
  }
};

export const pushAlarm = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage
) => {
  try {
    // const title =
    //   (remoteMessage.data?.title as string) ||
    //   (remoteMessage.notification?.title as string) ||
    //   '';
    // const body =
    //   (remoteMessage.data?.body as string) ||
    //   (remoteMessage.notification?.body as string) ||
    //   '';
    const { title, body } = remoteMessage.notification as {
      title: string;
      body: string;
    };

    if (!title && !body) {
      return;
    }

    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher'
      }
    });
  } catch (err) {
    console.error(err);
  }
};
