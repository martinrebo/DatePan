import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Avatar, Tile, Card } from 'react-native-elements'
import Healtcheck from '../../components/Healthcheck/Healtcheck'
import LanguageButton from '../../components/LanguageButton/LanguageButton'
import { auth } from '../../firebase'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }} >
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL!,
            }}
            onPress={() => navigation.navigate('ProfileView')}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={{
          marginRight: 10
        }}
          onPress={handleSignOut}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      )
    })
  }, [navigation])



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

  if (auth.currentUser?.displayName === null || auth.currentUser?.photoURL === null) {
    navigation.navigate("ProfileEdit")
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Card>
            <Tile
              imageSrc={require('../../assets/images/photos/daisies.jpg')}
              title="😀 "
              onPress={handleWudTimes}
              containerStyle={{ height: 300, maxWidth: 400 }}
              contentContainerStyle={{ height: 100, alignContent: "center" }}
              titleStyle={{ fontSize: 25, fontWeight: 'bold', textAlign: "center" }}
              captionStyle={{ fontSize: 25, textAlign: "center" }}
              activeOpacity={10}

            >
              <Button title={t('home.discover')} onPress={handleWudTimes} type="outline" />
            </Tile>

          </Card>
        </View>
        {/* <Text style={styles.emojiText}> 😀 </Text>
        <Button title="DISCOVER WUDTIMES" onPress={handleWudTimes} /> */}
        <View style={styles.container2}>
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

          </View>
        </View>
        <View >
          <LanguageButton />
          <Healtcheck />
        </View>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  screen: {
    maxWidth: 500,
  },
  header: {
    maxHeight: 200,
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