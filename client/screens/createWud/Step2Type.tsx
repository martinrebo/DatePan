
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addSubtype } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'
import { addCategoryEmoji } from '../../helpers/addEmoji'



const Step2Type = ({ route }: any) => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  const { type } = route.params as { type: Wudtime['category'] };
  const dispatch = useDispatch()
  const types = useSelector((state: RootState) => state.createWud.category)

  const handleClick = (wudType: any) => {
    dispatch(addSubtype(wudType))
    navigation.navigate('Step3Activity', { type, wudType })

  }
  const listOfWuds = WUDS.filter(wud => wud.type === type)
  const listOfSubtypes = listOfWuds.flatMap(wud => wud.wudTypes)

  console.log(type)

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text h2> {addCategoryEmoji[type as keyof typeof addCategoryEmoji].emoji}</Text>
        <Text > {addCategoryEmoji[type as keyof typeof addCategoryEmoji].name}</Text>
        <View style={styles.cardContainer}>
          {listOfSubtypes.map(((wud, i) => (

            <TouchableOpacity key={i}
              style={styles.cards}
              onPress={() => handleClick(wud.accessor)}
            >
              <Card >
                <Text style={styles.emoji}> {wud.emoji} </Text>
                <Text style={styles.text}>  {t(wud.name)}</Text>
              </Card>
            </TouchableOpacity>

          )))}
        </View>
      </View>
    </View>
  )
}

export default Step2Type

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
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  emoji: {
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
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
  },
  cards: {
    width: "50%",
  }

})