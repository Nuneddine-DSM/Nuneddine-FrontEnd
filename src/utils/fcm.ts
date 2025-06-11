import notifee, { AndroidImportance } from '@notifee/react-native';
import { Platform } from 'react-native';
import messaging, {
  FirebaseMessagingTypes
} from '@react-native-firebase/messaging';

export const requestNotificationPermissionAndCreateChannel = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      await notifee.requestPermission();
    }
    await messaging().requestPermission();

    await notifee.createChannel({
      id: 'default',
      name: '기본 채널',
      importance: AndroidImportance.DEFAULT
    });
  } catch (err) {
    console.error(err);
  }
};

export const pushAlarm = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage
) => {
  try {
    const { title, body } = remoteMessage.data as {
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
