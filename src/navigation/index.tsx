import { createStackNavigator } from '@react-navigation/stack';
import { useTypedSelector } from '../hooks';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import React from 'react';
import { isLogged as isLoggedSelector } from '../redux/customer/selectors';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigation;
