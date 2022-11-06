import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Avatar, Tile, Card, Image } from 'react-native-elements'
import Healtcheck from '../../components/Healthcheck/Healtcheck'
import LanguageButton from '../../components/LanguageButton/LanguageButton'
import { auth } from '../../firebase'
import { useTranslation } from 'react-i18next'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import * as Linking from 'expo-linking'

const HomeScreen = () => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  Linking.getInitialURL().then((url) => {
    // console.log("initial url", url);
    if (url?.includes("wud")) {
      let id = url.split("/")[4];
      // console.log("id initial", id);
      navigation.navigate("WudTimeID", { id })
    }
  });


  const handleOnPress = () => {
    navigation.navigate("Step1Category")
  }
  const handleMyWuds = () => {
    navigation.navigate("MyWuds")
  }
  const handleMyJoinedWuds = () => {
    navigation.navigate("MyJoinedWuds")
  }
  const handleWudTimes = () => {
    navigation.navigate("WudTimes")
  }
  const handleGroups = () => {
    navigation.navigate('Groups')
  }

  if (auth.currentUser?.displayName === null || auth.currentUser?.photoURL === null) {
    navigation.navigate("ProfileEdit")
  }

  console.log('USER', auth.currentUser?.displayName)

  const [userAuth, setUserAuth] = useState<string>('')

  useEffect(() => {
    setUserAuth(auth.currentUser?.displayName as string)
  }, [auth])
  

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
            <Button title={t('home.newWud')}
              onPress={handleOnPress} type="outline" />
          </Card>

        </View>
        <View style={styles.item}>
          <Card>
            <Button title={t('home.joinedWuds')}
              onPress={handleMyJoinedWuds} type="outline" />
          </Card>
          <Card>
            <Button title={t('home.createdWuds')}
              onPress={handleMyWuds} type="outline" />
          </Card>
          <Card>
            <Button title={'Groups'} 
            onPress={handleGroups}
            />
          </Card>

        </View>
      </View>
      <View >
        <LanguageButton />
        <View><Text>{userAuth}</Text></View>
        <Healtcheck />
        <View><Text> v.0.5</Text></View>
      </View>

    </LayoutScreen>

  )
}

export default HomeScreen

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