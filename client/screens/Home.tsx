import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import Healtcheck from '../components/Healthcheck/Healtcheck'
import LanguageButton from '../components/LanguageButton/LanguageButton'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation: any = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const handleOnPress = () => {
    navigation.navigate("Step1Type")
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
  const handleProfile = () => {
    navigation.navigate("ProfileView")
  }
  const handleChatOnPress = () => {
    navigation.navigate("Chat")
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text> 🚧  WORK IN PROGRESS 🚧 </Text>
        <Text>  Thanks for joinig the testing program ! </Text>
      </View>
      <View style={styles.item}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Button title="Create a Wudtime" onPress={handleOnPress} />
      </View>
      <View style={styles.item}>
        <Button title="My Wuds" onPress={handleMyWuds} />
      </View>
      <View style={styles.item}>
        <Button title="My Joined Wuds" onPress={handleMyJoinedWuds} />
      </View>
      <View style={styles.item}>
        <Button title="WUDTIMES" onPress={handleWudTimes} />
      </View>
      <View style={styles.item}>
        <Button title="Profile" onPress={handleProfile} />
      </View>
      <View style={styles.item}>
        <Healtcheck />
      </View>
      <View style={styles.item}>
        <LanguageButton />
      </View>


    </View>
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
  item: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    border: 1,
    textAlign: "center"
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
})