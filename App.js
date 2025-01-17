import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{Platform}from'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Login';
import SignupPage from './SignUp';
import MainPage from './MainPage';
import VirtualLab from './VirtualLab';
import Androidlab from './AndroidLab';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="VirtualLab" component={Platform.select({
              web: VirtualLab, // 50% of the screen width for Web
              android: Androidlab, // 80% of the screen width for Android
            })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
