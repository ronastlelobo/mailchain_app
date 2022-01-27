import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyTheme} from './src/Utils/Theme';
import Login from './src/Screens/Login/Login';
import Home from './src/Screens/Home/Home';

const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <MainStack.Screen
        name="LoginStackNavigator"
        component={LoginStackNavigator}
      />
      <MainStack.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
      />
    </MainStack.Navigator>
  );
};

export default function RootNavigator() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? MyTheme.darkTheme : MyTheme.defaultTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
