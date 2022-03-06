import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Localization from 'expo-localization';
import i18n from './in18n/in18n';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import { Landing } from './screens/Landing';
import HomeScreen from './screens/Home'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

i18n.locale = Localization.locale
i18n.fallbacks = true


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen options={{ headerShown: false }} name="Login" component={Landing} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>

        </ThemeProvider>

      </SafeAreaProvider>
    );
  }
}
