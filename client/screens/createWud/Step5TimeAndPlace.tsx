
import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Button, Card, Text, Input, CheckBox, Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addLocationData } from '../../redux/wudSlice'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import TimePicker from '../../components/TimePicker/TimePicker'
import React from 'react'
import Place from "../../components/Place/Place"

const Step4Joiners = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()

  const handleNext = () => {
    navigation.navigate('Step6Description', { category, wudType, activity })
  }

  return (
    <View>
      <Text h2> {addActivityEmoji[activity as keyof typeof addActivityEmoji].emoji}</Text>
      <Text > {addActivityEmoji[activity as keyof typeof addActivityEmoji].name}</Text>
      <Card>
        <TimePicker />
      </Card>
      <View>
      <Place />
      </View>

      <View style={styles.nextButton}>
        <Button title="Next" style={styles.nextButton}
          onPress={handleNext} />
      </View>
    </View>

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
  nextButton: {
    marginTop: 100,
  }
})