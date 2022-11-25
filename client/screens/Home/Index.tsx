import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'
import { useTranslation } from 'react-i18next'
import * as Linking from 'expo-linking'
import RestrictedHome from './RestrictedHome'
import Home from './Home'

const HomeScreen = () => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  Linking.getInitialURL().then((url) => {
    if (url?.includes("wud")) {
      let id = url.split("/")[4];
      navigation.navigate("WudTimeID", { id })
    }
  });

  if (auth.currentUser?.displayName === null || auth.currentUser?.photoURL === null) {
    navigation.navigate("ProfileEdit")
  }

  if (process.env.BRAND === 'WUD' || auth.currentUser?.uid == 'Pc9aXKgqm5d10uqSvNRzQ24u0cW2') return <Home />
  // if user is user id is Pc9aXKgqm5d10uqSvNRzQ24u0cW2 return <home>
  // if user 
  return <RestrictedHome />
}

export default HomeScreen
