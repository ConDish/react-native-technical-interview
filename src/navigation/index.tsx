import { createStackNavigator } from '@react-navigation/stack';
import { useTypedSelector } from '../hooks';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import WishListScreen from '../screens/wishlist';
import NewBookScreen from '../screens/new-book';
import RentailsScreen from '../screens/rentals';
import SettingScreen from '../screens/settings';
import React from 'react';
import I18n from '../I18n';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isLogged as isLoggedSelector } from '../redux/customer/selectors';
import { IconTab } from './style';
import DetailBookScreen from '../screens/detail-book';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === I18n.t('home_title')) {
            return (
              <IconTab
                source={require('../../assets/ToolBar/ic_library.png')}
              />
            );
          } else if (route.name === I18n.t('wish_list')) {
            return (
              <IconTab
                source={require('../../assets/ToolBar/ic_wishlist.png')}
              />
            );
          } else if (route.name === I18n.t('new_book')) {
            return (
              <IconTab
                source={require('../../assets/ToolBar/ic_add_new.png')}
              />
            );
          } else if (route.name === I18n.t('rentals')) {
            return (
              <IconTab
                source={require('../../assets/ToolBar/ic_myrentals.png')}
              />
            );
          } else if (route.name === I18n.t('settings')) {
            return (
              <IconTab
                source={require('../../assets/ToolBar/ic_settings.png')}
              />
            );
          }
        },
      })}>
      <Tab.Screen name={I18n.t('home_title')} component={HomeScreen} />
      <Tab.Screen name={I18n.t('wish_list')} component={WishListScreen} />
      <Tab.Screen name={I18n.t('new_book')} component={NewBookScreen} />
      <Tab.Screen name={I18n.t('rentals')} component={RentailsScreen} />
      <Tab.Screen name={I18n.t('settings')} component={SettingScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  const isLogged = useTypedSelector((state) => isLoggedSelector(state));
  return (
    <Stack.Navigator initialRouteName="Auth">
      {!isLogged ? (
        <Stack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailBook"
            component={DetailBookScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AppNavigation;
