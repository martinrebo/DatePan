
import {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
// import MultiSlider from '@ptomasroos/react-native-multi-slider';


import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
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
    
  const [value, setValue] = useState(0);
  
  const handleChange = (value: number) => {
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

        {/* <Slider value={value}
        minimumValue={18}
        maximumValue={100}
        step={1}
        thumbTintColor='#8139DC'
        onValueChange={(value => handleChange(value))}/> */}

{/* <MultiSlider 

/> */}

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