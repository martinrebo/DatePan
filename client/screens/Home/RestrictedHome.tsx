import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Avatar, Tile, Card, Image, Text } from 'react-native-elements'
import Healtcheck from '../../components/Healthcheck/Healtcheck'
import LanguageButton from '../../components/LanguageButton/LanguageButton'
import { auth } from '../../firebase'
import { useTranslation } from 'react-i18next'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import * as Linking from 'expo-linking'

const RestrictedHomeScreen = () => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  Linking.getInitialURL().then((url) => {
    if (url?.includes("wud")) {
      let id = url.split("/")[4];
      navigation.navigate("WudTimeID", { id })
    }
  });
  const handleMyJoinedWuds = () => {
    navigation.navigate("MyJoinedWuds")
  }
  const handleWudTimes = () => {
    navigation.navigate("WudTimes")
  }

  if (auth.currentUser?.displayName === null || auth.currentUser?.photoURL === null) {
    navigation.navigate("ProfileEdit")
  }

  const [userAuth, setUserAuth] = useState<string>('')

  useEffect(() => {
    setUserAuth(auth.currentUser?.displayName as string)
  }, [auth])
  
  console.log('Restricted home')
  return (

    <LayoutScreen>
      <Card>
        <Image
          source={require('../../assets/images/photos/daisies.jpg')}
          style={{ height: 100 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button title={t('home.discover')} onPress={handleWudTimes} type="outline" />
      </Card>

      <View style={styles.container}>
        <View style={styles.item}>
          <Card>
            <Button title={t('home.joinedWuds')}
              onPress={handleMyJoinedWuds} type="outline" />
          </Card>
        </View>
      </View>
      <Card>
      <LanguageButton />
        <Text>{userAuth}</Text>
        <Healtcheck />
        <Text> v.0.0.5</Text>
      </Card>
    </LayoutScreen>

  )
}

export default RestrictedHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  tile: {
    maxWidth: 375,
  },
  item: {
    textAlign: "center",
    width: "50%",
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  emojiText: {
    fontSize: 50,
    color: '#0782F9',
  },
})