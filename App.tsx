import React from 'react';
import { Signin } from './src/screens/Signin';
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {AppLoading} from './src/components/AppLoading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={THEME}>
{/*       <Box>Hello world</Box>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Signin /> */}
    </NativeBaseProvider>
  );
}