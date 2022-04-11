
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Slider, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
// import MultiSlider from '@ptomasroos/react-native-multi-slider';


import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addLocation } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, subType, activity } = route.params;
  const dispatch = useDispatch()

  // const handleClick = (activity: any) => {
  //   console.log(activity)
  //   dispatch(addType(activity))
  //   navigation.navigate('Step4Joiners', {type, subType, activity})

  const [value, setValue] = useState("Barcelona");

  const handleChange = (value: string) => {
    setValue(value)
  }

  const handleNext = () => {

    dispatch(addLocation(value))
    navigation.navigate('Step5Description', { type, subType, activity })
  }


  return (
    <View style={styles.container}>
      <View style={styles.screen}>

        <Card>
          <Text> type {JSON.stringify(type)}</Text>
          <Text> subtype {JSON.stringify(subType)}</Text>
          <Text> activity {JSON.stringify(activity)}</Text>
        </Card>
        <Input
          label="Location"
          placeholder="Describe your activity"
          maxLength={144}
          onChangeText={value => handleChange(value)} />

        <Button title="Next"
          onPress={handleNext} />
        <Text>{value}</Text>
      </View>
    </View>
  )
}

export default Step3Activity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  screen: {
    maxWidth: 500
  },
  button: {
    marginTop: 10
  }
})