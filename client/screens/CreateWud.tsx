import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { auth } from '../firebase'

const CreateWud = () => {

  return (
    <View style={styles.container}>
      <Text> Create WudTime Screen</Text>

    </View>
  )
}

export default CreateWud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
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