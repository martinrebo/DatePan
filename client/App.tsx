import { StatusBar } from 'expo-status-bar';
import React, { useEffect, createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Localization from 'expo-localization';
import i18n from './in18n/in18n';
//  import {loadLocale } from './in18n/in18n';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import { Landing } from './screens/Landing';
import HomeScreen from './screens/Home'
import Step1Type from './screens/createWud/Step1Type';
import Step2Subtype from './screens/createWud/Step2SubType';
import Step3Activity from './screens/createWud/Step3Activity';
import Step4Joiners from './screens/createWud/Step4Joiners';
import Step5Description from './screens/createWud/Step5Description';
import MyWuds from './screens/myWuds/MyWuds';
import Wudtimes from './screens/Wudtimes/Wudtimes';
import ProfileView from './screens/profile/ProfileView';
import ProfileEdit from './screens/profile/ProfileEdit';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();
  const ContextStore = createContext({ language: "es" })
  // i18n.locale = "es"
  // i18n.fallbacks = true

  // useEffect(() => {
  //   init()
  // }, [])

  // const init = async () => {
  //   await loadLocale()
  // }
  // i18n.locale = 'es'
  // i18n.fallbacks = true

  const theme = {
    colors: {
      primary: '#8139DC',
      secondary: '#12EDFF'
    }
  }
  i18n.defaultLocale = 'en'
  i18n.locale = 'en'
  i18n.fallbacks = true

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
        <Provider store={store}>
          <ContextStore.Provider value={{ language: "es" }}>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen options={{ headerShown: false }} name="Login" component={Landing} />

                  <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

                  <Stack.Group>
                    <Stack.Screen options={{ headerShown: false }} name="Step1Type" component={Step1Type} />
                    <Stack.Screen options={{ headerShown: false }} name="Step2SubType" component={Step2Subtype} />
                    <Stack.Screen options={{ headerShown: false }} name="Step3Activity" component={Step3Activity} />
                    <Stack.Screen options={{ headerShown: false }} name="Step4Joiners" component={Step4Joiners} />
                    <Stack.Screen options={{ headerShown: false }} name="Step5Description" component={Step5Description} />
                  </Stack.Group>
                  <Stack.Screen options={{ headerShown: false }} name="MyWuds" component={MyWuds} />
                  <Stack.Screen options={{ headerShown: false }} name="WudTimes" component={Wudtimes} />
                  <Stack.Screen options={{ headerShown: false }} name="ProfileView" component={ProfileView} />
                  <Stack.Screen options={{ headerShown: false }} name="ProfileEdit" component={ProfileEdit} />
                </Stack.Navigator>
              </NavigationContainer>

            </ThemeProvider>
          </ContextStore.Provider>
        </Provider>

      </SafeAreaProvider>
    );
  }
}
