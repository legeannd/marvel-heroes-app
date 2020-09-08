import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React from 'react';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

import gilroyExtrabold from './assets/fonts/Gilroy-ExtraBold.otf';
import gilroyLight from './assets/fonts/Gilroy-Light.otf';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    gilroy_extrabold: gilroyExtrabold,
    gilroy_light: gilroyLight,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
