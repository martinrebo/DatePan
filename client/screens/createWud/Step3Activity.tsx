
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'
import { addType, addActivity } from '../../redux/wudSlice'
import { WUDS } from '../../constants/WUDS'
import { addTypeEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'



const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { category, wudType } = route.params;
  const dispatch = useDispatch()

  const handleClick = (activity: any) => {

    dispatch(addActivity(activity))
    navigation.navigate('Step4Joiners', { category, wudType, activity })
  }
  console.log(wudType)

  const listOfWuds = WUDS.filter(wud => wud.category === category)
  const listOfSubtypes = listOfWuds.flatMap(wud => wud.wudTypes)
  const listOfActivities = listOfSubtypes.filter(wud => wud.accessor === wudType)
  const listOfActivitiesName = listOfActivities.flatMap(wud => wud.activities)

  return (
    <LayoutScreen>
      <Text h2> {addTypeEmoji[wudType as keyof typeof addTypeEmoji].emoji} </Text>
      <Text> {addTypeEmoji[wudType as keyof typeof addTypeEmoji].name}</Text>

      <View style={styles.cardContainer}>
        {listOfActivitiesName.map(((wud, i) => (

          <TouchableOpacity
            key={i}
            style={styles.cards}
            onPress={() => handleClick(wud.accessor)}>
            <Card >
              <Text h4>{wud.emoji}</Text>
              <Text> {wud.name}</Text>
            </Card>
          </TouchableOpacity>

        )))}

      </View>
    </LayoutScreen>
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