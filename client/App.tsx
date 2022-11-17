import React, {useState, useEffect} from 'react';
import { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import  NavigationContainer from './navigation';
import { Provider } from 'react-redux';
import {auth, onAuthStateChanged} from './firebase'
import { store } from './redux/store'
import "./i18n/i18n"
import useCachedResources from './hooks/useCachedResources';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        // TODO: add mongodb User details roles, groups to the state. 
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

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
