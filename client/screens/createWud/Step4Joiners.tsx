
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, subType, activity } = route.params;
  const dispatch = useDispatch()
  // const types = useSelector((state: RootState) => state.createWud.type)
  // const subTypes = useSelector((state: RootState) => state.createWud.subtype)

  // const handleClick = (activity: any) => {
  //   console.log(activity)
  //   dispatch(addType(activity))
  //   navigation.navigate('Step4Joiners', {type, subType, activity})
    
  // }
  // const listOfWuds = WUDS.filter(wud => wud.type === type)
  // const listOfSubtypes = listOfWuds.flatMap(wud => wud.subtypes)
  // const listOfActivities = listOfSubtypes.filter(wud => wud.name === subType)
  // const listOfActivitiesName = listOfActivities.flatMap(wud => wud.activities)
  // console.log("subtypws, " ,listOfSubtypes)
  // console.log("activityes", listOfActivitiesName)


  return (
    <View style={styles.container}>
      <View style={styles.screen}>

        <Card>
          <Text> type {JSON.stringify(type)}</Text>
          <Text> subtype {JSON.stringify(subType)}</Text>
          <Text> activity {JSON.stringify(activity)}</Text>
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
    maxWidth: 500
  },
  button: {
    marginTop: 10
  }
})