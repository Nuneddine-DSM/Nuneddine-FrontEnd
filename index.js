/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message Handled in the background',
    JSON.stringify(remoteMessage)
  );

  const { title, body } = remoteMessage.data;

  const channelId = await notifee.createChannel({
    id: 'default',
    name: '기본 채널',
    importance: AndroidImportance.HIGH
  });

  await notifee.displayNotification({
    title: title || '알림 제목',
    body: body || '알림 내용',
    android: {
      channelId,
      smallIcon: 'rn_edit_text_material'
    }
  });
});

AppRegistry.registerComponent(appName, () => App);
