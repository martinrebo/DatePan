
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addLocationData } from '../../redux/wudSlice'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'


const Step4Joiners = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()

  // console.log(activity)

  // const handleClick = (activity: any) => {
  //   console.log(activity)
  //   dispatch(addType(activity))
  //   navigation.navigate('Step4Joiners', {type, wudType, activity})

  const [valueCity, setValueCity] = useState("Barcelona");
  const [valueAddress, setValueAddress] = useState("");
  const [valuePlace, setValuePlace] = useState("");

  const handleChangeCity = (value: string) => {
    setValueCity(value)
  }

  const handleChangeAddress = (value: string) => {
    setValueAddress(value)
  }

  const handleChangePlace = (value: string) => {
    setValuePlace(value)
  }



  const handleNext = () => {

    dispatch(addLocationData({ city: valueCity, address: valueAddress, place: valuePlace }))
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
        <Input
          label="City"
          placeholder={valueCity}
          maxLength={50}
          disabled={true}
          onChangeText={value => handleChangeCity(value)} />
        <Input
          label="Address"
          placeholder="e.g. Calle de la Hispanidad, 1"
          maxLength={144}
          onChangeText={value => handleChangeAddress(value)} />
        <Input
          label="Place"
          placeholder="e.g. Bar Iberia"
          maxLength={144}
          onChangeText={value => handleChangePlace(value)} />
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