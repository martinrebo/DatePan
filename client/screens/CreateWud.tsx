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
})