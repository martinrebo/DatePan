
import React, { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import * as Linking from 'expo-linking';
import { useTranslation } from 'react-i18next';

import { store } from './redux/store'
import "./i18n/i18n"

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import { Landing } from './screens/Landing';
import HomeScreen from './screens/Home/Home'
import Step1Category from './screens/createWud/Step1Category';
import Step2Type from './screens/createWud/Step2Type';
import Step3Activity from './screens/createWud/Step3Activity';
import Step4Joiners from './screens/createWud/Step4Joiners';
import Step5TimeAndPlace from './screens/createWud/Step5TimeAndPlace';
import Step6Description from './screens/createWud/Step6Description';
import MyWuds from './screens/myWuds/MyWuds';
import Attendees from './screens/myWuds/Attendees';
import Wudtimes from './screens/Wudtimes/Wudtimes';
import WudTimeID from './screens/WudTimeID/WudTimeID';
import ProfileView from './screens/profile/ProfileView';
import ProfileEdit from './screens/profile/ProfileEdit';
import MyJoinedWuds from './screens/myJoinedWuds/MyJoinedWuds';
import Chat from './screens/chat/Chat';
import JoinersCheckList from './screens/myWuds/JoinersCheckList'

import AvatarHead from './components/AvatarHead/AvatarHead';
import GoBackHead from './components/GoBackHead/GoBackHead';
import GoHomeHead from './components/GoHomeHead/GoHomeHead';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();
  const ContextStore = createContext({ language: "es" })
  const { t } = useTranslation()


  const theme = {
    colors: {
      primary: '#8139DC',
      secondary: '#12EDFF'
    }
  }

  const prefix = Linking.createURL('/');


  const linking = {
    prefixes: [prefix],
  };


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

              <NavigationContainer linking={linking} fallback={Landing}>
                <Stack.Navigator>
                  <Stack.Screen options={{ headerShown: false }} name="Login" component={Landing} />

                  <Stack.Group
                    screenOptions={({ navigation }) => ({
                      headerLeft: () => (<AvatarHead />),
                      headerRight: () => <GoBackHead onPress={navigation.goBack} />,
                    })}
                  >
                    <Stack.Screen options={{ title: t("createWudStep1.title") }}
                      name="Step1Category" component={Step1Category} />
                    <Stack.Screen
                      options={{
                        title: t("createWudStep2.title")
                      }} name="Step2Type" component={Step2Type} />
                    <Stack.Screen
                      options={{
                        title: t("createWudStep3.title")
                      }} name="Step3Activity" component={Step3Activity} />
                    <Stack.Screen
                      options={{
                        title: t("createWudStep4.title")
                      }}
                      name="Step4Joiners" component={Step4Joiners} />

                    <Stack.Screen
                      options={{ headerShown: false }}
                      name="Step5TimeAndPlace" component={Step5TimeAndPlace} />
                    <Stack.Screen
                      options={{ headerShown: false }}
                      name="Step6Description" component={Step6Description} />


                    <Stack.Screen
                      options={{
                        title: t('wudTimes.title')
                      }}
                      name="WudTimes" component={Wudtimes} />

                    <Stack.Screen
                      options={{ title: t('profileView.title') }}
                      name="ProfileView" component={ProfileView} />
                    <Stack.Screen
                      options={{ title: t('profileEdit.title') }}
                      name="ProfileEdit" component={ProfileEdit} />
                    <Stack.Screen
                      options={{ title: t('myJoinedWuds.title') }}
                      name="MyJoinedWuds" component={MyJoinedWuds} />

                    <Stack.Screen options={{ title: t('chat.title') }} name="Chat" component={Chat} />
                  </Stack.Group>
                  <Stack.Group
                    screenOptions={({ navigation }) => ({
                      headerLeft: () => (<AvatarHead />),
                      headerRight: () => <GoHomeHead onPress={() => navigation.navigate("Home")} />,
                    })}

                  >

                    <Stack.Screen
                      options={{
                        title: t('wudTimes.title')
                      }}
                      name="WudTimeID" component={WudTimeID} />

                    <Stack.Screen
                      options={{ title: t('myWuds.title') }}
                      name="MyWuds" component={MyWuds} />

                    {/* <Stack.Screen
                      options={{ title: t('myWuds.listOfAttendees') }}
                      name="Attendees" component={Attendees} /> */}

                    <Stack.Screen
                      options={{ title: t('myWuds.joinersCheckList') }}
                      name="JoinersCheckList" component={JoinersCheckList} />

                    <Stack.Screen options={{ title: t('wudTimes.title') }} name="Home" component={HomeScreen} />

                  </Stack.Group>

                </Stack.Navigator>
              </NavigationContainer>


            </ThemeProvider>
          </ContextStore.Provider>
        </Provider>

      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
  }
}
);
