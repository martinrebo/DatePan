import React, { useState, useEffect } from 'react'
import * as Linking from 'expo-linking'
import { useNavigation } from '@react-navigation/core'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Avatar, Tile, Card, Image, Text } from 'react-native-elements'
import { useTranslation } from 'react-i18next'

import Healtcheck from '../../components/Healthcheck/Healtcheck'
import LanguageButton from '../../components/LanguageButton/LanguageButton'
import { auth } from '../../firebase'

import LayoutScreen from '../../components/Layout/LayoutScreen'
import { addCategory, addType, addActivity } from '../../redux/wudSlice'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  Linking.getInitialURL().then((url) => {
    if (url?.includes("wud")) {
      let id = url.split("/")[4];
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
  const handleTemplate = () => {
    // TODO: Template event DB
    console.log('click')
    dispatch(addCategory('purpose'))
    dispatch(addType('environment'))
    dispatch(addActivity('ngoVolunteering'))
    navigation.navigate('Step5TimeAndPlace', { category: 'purpose', wudType: 'environment', activity: 'ngoVolunteering' })

  }

  if (auth.currentUser?.displayName === null || auth.currentUser?.photoURL === null) {
    navigation.navigate("ProfileEdit")
  }

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
        {
            auth.currentUser?.uid == 'Pc9aXKgqm5d10uqSvNRzQ24u0cW2' ?
              <Card>
                <Button title={'Create CBI event'}
                  onPress={handleTemplate} />
              </Card>
              : null
          }
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
              onPress={handleGroups} type='outline'
            />
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

export default Home

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