
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import TimePicker from '../../components/TimePicker/TimePicker'
import React from 'react'

const Step4Joiners = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()

  const handleNext = () => {
    navigation.navigate('Step6Description', { category, wudType, activity })
  }

  return (
    <LayoutScreen> 
        <Card>
          <Text h2> {addActivityEmoji[activity as keyof typeof addActivityEmoji].emoji}</Text>
          <Text > {addActivityEmoji[activity as keyof typeof addActivityEmoji].name}</Text>
        </Card>
        <Card>
          <TimePicker />
        </Card>
        {/* <Card>

          <Place />

        </Card> */}
        <Card>
          <Button title="Next" style={styles.nextButton}
            onPress={handleNext} />
        </Card>
        </LayoutScreen>

  )
}

export default Step4Joiners

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 10

  },
  screen: {
    maxWidth: 500,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 100,
  }
})