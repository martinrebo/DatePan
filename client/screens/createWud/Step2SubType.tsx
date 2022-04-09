
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addSubtype } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'
import { WUDS } from './WUDS'



const Step2SubType = ({ route }: any) => {
  const navigation: any = useNavigation()

  const { type } = route.params;
  const dispatch = useDispatch()
  const types = useSelector((state: RootState) => state.createWud.type)

  const handleClick = (subType: any) => {
    console.log(subType)
    dispatch(addSubtype(subType))
    navigation.navigate('Step3Activity', {type, subType})
    
  }
  const listOfWuds = WUDS.filter(wud => wud.type === type)
  const listOfSubtypes = listOfWuds.flatMap(wud => wud.subtypes)


  return (
    <View style={styles.container}>
      <View style={styles.screen}>

        <Card>
          <Text> Subtype {JSON.stringify(type)}</Text>
        </Card>

        {listOfSubtypes.map(((wud, i) => (

          <Card key={i}>
            <Text> {wud.name}</Text>
            <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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

export default Step2SubType

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