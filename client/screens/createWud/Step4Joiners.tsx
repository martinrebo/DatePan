
import React from 'react'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addLocationData } from '../../redux/wudSlice'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'

// TODO: ACTIVATE COMPONENT

const Step4Joiners = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()

  const handleNext = () => {
    navigation.navigate('Step5TimeAndPlace', { category, wudType, activity })
  }

  const [checkedSpanish, setCheckedSpanish] = useState(true);
  const setSpanishLanguages = (value: boolean) => {
    setCheckedSpanish(!value)
  }
  const [checkedEnglish, setCheckedEnglish] = useState(true);
  const setEnglishLanguages = (value: boolean) => {
    setCheckedEnglish(!value)
  }


  return (
    <LayoutScreen >
      <Text h2> {addActivityEmoji[activity as keyof typeof addActivityEmoji].emoji}</Text>
      <Text > {addActivityEmoji[activity as keyof typeof addActivityEmoji].name}</Text>

      <Card>
        <Card.Title>
          <Text> Select Languages Spoken </Text>
        </Card.Title>
        <CheckBox
          center
          title='Spanish'
          checked={checkedSpanish}
          onPress={() => setSpanishLanguages(checkedSpanish)}
        />
        <CheckBox
          center
          title='English'
          checked={checkedEnglish}
          onPress={() => setEnglishLanguages(checkedEnglish)}
        />
      </Card>

      <Card>
        <Button title="Next"
          onPress={handleNext} />
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