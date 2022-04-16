
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType, addActivity } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'
import { addEmoji, addTypeEmoji } from '../../helpers/addEmoji'
import { textAlign } from '@mui/system'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type, wudType } = route.params;
  const dispatch = useDispatch()
  // const types = useSelector((state: RootState) => state.createWud.type)
  // const wudTypes = useSelector((state: RootState) => state.createWud.wudType)

  const handleClick = (activity: any) => {
    console.log(activity)
    dispatch(addActivity(activity))
    navigation.navigate('Step4Joiners', { type, wudType, activity })


  }
  const listOfWuds = WUDS.filter(wud => wud.type === type)
  const listOfSubtypes = listOfWuds.flatMap(wud => wud.wudTypes)
  const listOfActivities = listOfSubtypes.filter(wud => wud.accessor === wudType)
  const listOfActivitiesName = listOfActivities.flatMap(wud => wud.activities)
  console.log("subtypws, ", listOfSubtypes)
  console.log("activityes", listOfActivitiesName)


  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text h2> {addTypeEmoji[wudType].emoji} </Text>
        <Text> {addTypeEmoji[wudType].name}</Text>

        <View style={styles.cardContainer}>


          {listOfActivitiesName.map(((wud, i) => (
            <TouchableOpacity
              style={styles.cards}
              onPress={() => handleClick(wud.accessor)}>
              <Card key={i} >

                <Text h4>{wud.emoji}</Text>
                <Text> {wud.name}</Text>

              </Card>
            </TouchableOpacity>

          )))}

        </View>
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
  },
  screen: {
    maxWidth: 500,
    textAlign: 'center',
  },
  button: {
    marginTop: 10
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  cards: {
    width: "50%",
  }
})