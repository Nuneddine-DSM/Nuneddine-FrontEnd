/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './src/components/NavBar';
import MainTabs from './src/navigation/MainTabs'
import Onboarding from './src/app/Onboarding/page';
import Login from './src/app/Login/page';
import SignUp from './src/app/SignUp/page';
import Cart from './src/app/Shopping/Cart/page';
import Payment from './src/app/Shopping/Payment/page';
import Delivery from './src/app/Shopping/Delivery/page';
import OrderDetails from './src/app/MyPage/OrderDetails';
import Like from './src/app/MyPage/Like';
import DeliveryDetail from './src/app/MyPage/Delivery/page';
import DeliverAdd from './src/app/MyPage/Delivery/Add';
import EditProfile from './src/app/MyPage/EditProfile';
import Frequency from './src/app/MyPage/Frequency';
import FaceFit from './src/app/FaceFit/page';
import Recommend from './src/app/FaceFit/Recommend';
import GuideDetail from './src/app/Guide/Detail';
import ShoppingDetail from './src/app/Shopping/Detail/page';
import Search from './src/app/Search/page';
import SearchProduct from './src/app/SearchProduct/page';
import Filter from './src/app/SearchProduct/Filter';
import AddressWebview from './src/app/MyPage/Delivery/Address';
import GlassesData from './src/app/Find/Glasses'
import LensData from './src/app/Find/Lens'
import OrderComplete from './src/app/Shopping/Payment/OrderComplete'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { getItem, setItem } from './src/utils/asyncStorage';
import {
  pushAlarm,
  requestNotificationPermissionAndCreateChannel
} from './src/utils/fcm';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const initApp = async () => {
      try {
        const hasLaunched = await getItem('hasLaunched');
        if (!hasLaunched) {
          requestNotificationPermissionAndCreateChannel();

          await setItem('hasLaunched', 'true');
        }

        const unsubscribe = messaging().onMessage(async remoteMessage => {
          console.log('Foreground Message', JSON.stringify(remoteMessage));

          pushAlarm(remoteMessage);
        });

        return unsubscribe;
      } catch (err) {
        console.error(err);
      }
    };

    initApp();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="MainTabs">
              <Stack.Screen name="NavBar" component={NavBar} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="MainTabs" component={NavBar} options={{ headerShown: false }} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Delivery" component={Delivery} />
              <Stack.Screen name="OrderDetails" component={OrderDetails} />
              <Stack.Screen name="Like" component={Like} />
              <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} />
              <Stack.Screen name="DeliveryAdd" component={DeliverAdd} />
              <Stack.Screen name="AddressWebview" component={AddressWebview} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="Frequency" component={Frequency} />
              <Stack.Screen name="FaceFit" component={FaceFit} />
              <Stack.Screen name="Recommend" component={Recommend} />
              <Stack.Screen name="GuideDetail" component={GuideDetail} />
              <Stack.Screen name="ShoppingDetail" component={ShoppingDetail} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="SearchProduct" component={SearchProduct} />
              <Stack.Screen name="Filter" component={Filter} />
              <Stack.Screen name="GlassesData" component={GlassesData} />
              <Stack.Screen name="LensData" component={LensData} />
              <Stack.Screen name="OrderComplete" component={OrderComplete} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
