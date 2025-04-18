/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './src/components/NavBar';
import Main from './src/app/Main/page';
import Guide from './src/app/Guide/page';
import MyPage from './src/app/MyPage/page';
import Manage from './src/app/Manage/page';
import Onboarding from './src/app/Onboarding/page';
import Login from './src/app/Login/page';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding">
        <Stack.Screen name="NavBar" component={NavBar} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="Manage" component={Manage} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
