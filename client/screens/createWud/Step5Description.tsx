
import { SetStateAction, useState } from 'react'
import { StyleSheet, Text, View , Platform} from 'react-native'
import { Button, Card, Input, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from '@react-native-community/datetimepicker';


import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'
import TimePicker from '../../components/TimePicker/TimePicker';



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, subType, activity } = route.params;
  const dispatch = useDispatch()

  // const handleClick = (activity: any) => {
  //   console.log(activity)
  //   dispatch(addType(activity))
  //   navigation.navigate('Step4Joiners', {type, subType, activity})

  const [value, setValue] = useState('');

  const handleChange = ( value: string) => {
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