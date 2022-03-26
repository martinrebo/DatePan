
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'

import { RootState} from '../../redux/store'
import { useSelector , useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
import { Wudtime } from '../../interfaces/wudtime'

const CreateWud = () => {

  // const dispatch = useDispatch()
  // const types = useSelector((state: RootState) => state.createWud.type)

  // const handleClick = (type: Wudtime['type']) => { 
  //   console.log(type)
  //   dispatch(addType(type))
  // }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
      <Card>
        <Text> Subtype </Text>
      </Card>

    </View>
    </View>
  )
}

export default CreateWud

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
  button : {
    marginTop: 10
  }
})