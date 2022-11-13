import { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import  NavigationContainer from './navigation';
import { Provider } from 'react-redux';

import { store } from './redux/store'
import "./i18n/i18n"

import useCachedResources from './hooks/useCachedResources';
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const ContextStore = createContext({ language: "es" })

  const theme = {
    colors: {
      primary: process.env.BRAND === 'CBI' ? '#000' : '#8139DC',
      secondary: '#12EDFF'
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ContextStore.Provider value={{ language: "es" }}>
            <ThemeProvider theme={theme}>
              <NavigationContainer />
            </ThemeProvider>
          </ContextStore.Provider>
        </Provider>

      </SafeAreaProvider>
    );
  }
}
