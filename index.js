/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import { pushAlarm } from './src/utils/fcm';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background Message', JSON.stringify(remoteMessage));

  pushAlarm();
});

AppRegistry.registerComponent(appName, () => App);
