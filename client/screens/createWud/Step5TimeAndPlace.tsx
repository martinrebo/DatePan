
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addLocationData } from '../../redux/wudSlice'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import TimePickerWeb from '../../components/TimePicker/TimePickerWeb'
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
      <Text h2> {addActivityEmoji[activity as keyof typeof addActivityEmoji].emoji}</Text>
      <Text > {addActivityEmoji[activity as keyof typeof addActivityEmoji].name}</Text>
      <Card>
        <TimePickerWeb />
      </Card>
    </LayoutScreen>

  )
}

export default Step4Joiners

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  screen: {
    maxWidth: 500,
    textAlign: 'center',
  },
  button: {
    marginTop: 10
  }
})