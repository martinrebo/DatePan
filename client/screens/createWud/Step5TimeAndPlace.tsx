
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import TimePicker from '../../components/TimePicker/TimePicker'
import Place from '../../components/Place/Place'
import React from 'react'

const Step4Joiners = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()

  const handleNext = () => {
    navigation.navigate('Step6Description', { category, wudType, activity })
  }

  return (
    <LayoutScreen >
      <Card containerStyle={styles.places}>
        <Place />
      </Card>
      <Card>
        <TimePicker />
      </Card>
      <View style={styles.nextButton}>
        <Card>
          <Button title="Next"
            onPress={handleNext} />
        </Card>

      </View>
    </LayoutScreen>

  )
}

export default Step4Joiners

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  places: {
    marginBottom: 50
  },
  screen: {
    maxWidth: 500,
    textAlign: 'center',
  },
  nextButton: {
    zIndex: 1,
    marginTop: 10,
  }
})