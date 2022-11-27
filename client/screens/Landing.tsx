import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme, Image } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core'

import { auth } from '../firebase'
import LoginScreen from '../components/Login/Login';
import LayoutScreen from '../components/Layout/LayoutScreen';



export interface LandingProps {
  route: any;
}

export function Landing({ route }: LandingProps) {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const navigation: any = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user && route?.params?.id) {
        navigation.replace('WudTimeID', { id: route?.params?.id })
      } else if (user) {
        navigation.navigate('Home')
      }
    })
    return unsubscribe
  }, [auth])

  return (
    <LayoutScreen>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image source={require(`../assets/images/logos/${process.env.BRAND}-Logo.png`)} containerStyle={styles.image} />
        </View>
        <View style={styles.item}>
          <Text
            style={styles.title}
            h3
            h1Style={{ color: theme?.colors?.primary }}
          >
            {t('brandName')}
          </Text>
          <Text
            style={styles.text}
            h4
            h2Style={{ color: theme?.colors?.grey2 }}
          >
            {t('motto')}
          </Text>
          <Text style={styles.text}>
            {t('welcome')}
          </Text>
        </View>
        <View style={styles.more}>
          <LoginScreen />
        </View>
      </View>
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // marginVertical: 100,
    alignContent: "center",
    alignItems: 'center'
  },
  item: {
    alignContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignContent: 'center',

  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  more: {
    marginVertical: 100,
  },
});
