import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigator from './router';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'top', 'left']} style={{flex: 1}}>
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
