import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'
import { useTranslation } from 'react-i18next'
import * as Linking from 'expo-linking'
import Home from './Home'
import RestrictedHome from './RestrictedHome'

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


if (process.env.BRAND === 'WUD') return <Home/>
// if user is CBI and admin return <Home>

// if user is CBI and not admin return <RestrictedHome>
return <RestrictedHome />
}

export default HomeScreen