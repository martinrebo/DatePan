
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
// import MultiSlider from '@ptomasroos/react-native-multi-slider';


import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addLocation } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'
import { addActivityEmoji } from '../../helpers/addEmoji'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, wudType, activity } = route.params;
  const dispatch = useDispatch()

  console.log(activity)

  // const handleClick = (activity: any) => {
  //   console.log(activity)
  //   dispatch(addType(activity))
  //   navigation.navigate('Step4Joiners', {type, wudType, activity})

  const [value, setValue] = useState("Barcelona");

  const handleChange = (value: string) => {
    setValue(value)
  }

  const handleNext = () => {

    dispatch(addLocation(value))
    navigation.navigate('Step5Description', { type, wudType, activity })
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
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text h2> {addActivityEmoji[activity as keyof typeof addActivityEmoji].emoji}</Text>
        <Text > {addActivityEmoji[activity as keyof typeof addActivityEmoji].name}</Text>
        <Card>
          <Input
            label="Location"
            placeholder={value}
            maxLength={144}
            disabled={true}
            onChangeText={value => handleChange(value)} />
        </Card>
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
    maxWidth: 500,
    textAlign: 'center',
  },
  button: {
    marginTop: 10
  }
})