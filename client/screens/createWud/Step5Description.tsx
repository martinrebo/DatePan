
import { SetStateAction, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Button, Card, Input, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from '@react-native-community/datetimepicker';


import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addNotes } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'
import TimePicker from '../../components/TimePicker/TimePicker';
import { usePingQuery, useCreateWudTimeQuery } from '../../api/api';



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()
  const { type, subType, activity } = route.params;
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(true)

  const createWudState = useSelector((state: RootState) => state.createWud)

  const { data, error, isLoading } = useCreateWudTimeQuery(createWudState, { skip })

  const handleSubmit = () => {
    console.log("send to API", createWudState)
    setSkip(false)
    // navigation.navigate('Step4Joiners', { type, subType, activity })
  }

  useEffect(() => {
    setSkip(true)
  }, [skip])
  


  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    dispatch(addNotes(value))
    setValue(value)
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
          label="Description"
          placeholder="Describe your activity"
          maxLength={144}
          onChangeText={value => handleChange(value)} />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
{isLoading ? <Text>Loading...</Text> : null}
{error ? <Text>Error! {error}</Text> : null}

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
