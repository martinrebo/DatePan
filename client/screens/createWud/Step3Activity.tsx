
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType,  addActivity } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, subType } = route.params;
  const dispatch = useDispatch()
  // const types = useSelector((state: RootState) => state.createWud.type)
  // const subTypes = useSelector((state: RootState) => state.createWud.subtype)

  const handleClick = (activity: any) => {
    console.log(activity)
    dispatch(addActivity(activity))
    navigation.navigate('Step4Joiners', {type, subType, activity})
    
  }
  const listOfWuds = WUDS.filter(wud => wud.type === type)
  const listOfSubtypes = listOfWuds.flatMap(wud => wud.subtypes)
  const listOfActivities = listOfSubtypes.filter(wud => wud.name === subType)
  const listOfActivitiesName = listOfActivities.flatMap(wud => wud.activities)
  console.log("subtypws, " ,listOfSubtypes)
  console.log("activityes", listOfActivitiesName)


  return (
    <View style={styles.container}>
      <View style={styles.screen}>

        <Card>
          <Text> type {JSON.stringify(type)}</Text>
          <Text> subtype {JSON.stringify(subType)}</Text>
        </Card>

        {listOfActivitiesName.map(((wud, i) => (

          <Card key={i}>
            <Text> {wud.name}</Text>
            <Text> Description { wud.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Atque quidem dolore maxime exercitationem ducimus quos?
                Corporis, beatae labore facere consectetur laborum magni ipsum autem natus?
                 In sint eveniet ad quos?</Text>
            <Button title="go" onPress={() => handleClick(wud.name)} />
          </Card>

        )))}


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