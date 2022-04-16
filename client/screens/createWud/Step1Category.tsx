
import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Card, Avatar, Text } from 'react-native-elements'
import { useTranslation } from 'react-i18next'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
import { useNavigation } from '@react-navigation/native'
import { Wudtime } from '../../interfaces/wudtime'
import { auth } from '../../firebase'
import { style } from '@mui/system'



const CreateWud = () => {
  const { t } = useTranslation()

  const navigation: any = useNavigation()
  const dispatch = useDispatch()
  const types = useSelector((state: RootState) => state.createWud.category)

  const handleClick = (type: Wudtime['category']) => {

    dispatch(addType(type))
    navigation.navigate('Step2Type', { type })
  }


  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={(type) => handleClick('fun')}>
          <Card>
            <Card.Title>
              <Text h2 > 🎉  </Text>
              <Text> {t('emojis.fun')}</Text>
            </Card.Title>
            <Card.Divider />
            {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
            <Text> {t('createWudStep1.fun')} </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={(type) => handleClick('skills')}>
          <Card>
            <Card.Title>
              <Text h2> 💪   </Text>
              <Text> {t('emojis.skills')} </Text>
            </Card.Title>
            <Card.Divider />
            {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
            <Text>  {t('createWudStep1.skills')}</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={(type) => handleClick('purpose')}>
          <Card>
            <Card.Title>
              <Text h2> 💡  </Text>
              <Text> {t('emojis.purpose')} </Text>
            </Card.Title>
            <Card.Divider />
            {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
            <Text> {t('createWudStep1.purpose')} </Text>
          </Card>
        </TouchableOpacity>

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
  },
  screen: {
    maxWidth: 500
  },
  button: {
    marginTop: 10,
    width: 100
  },
  emoji: {
    fontSize: 50
  }
})