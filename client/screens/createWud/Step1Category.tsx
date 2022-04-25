
import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Card, Avatar, Text } from 'react-native-elements'
import { useTranslation } from 'react-i18next'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addCategory } from '../../redux/wudSlice'
import { useNavigation } from '@react-navigation/native'
import { IWudtime } from '../../interfaces/wudtime'
import LayoutScreen from '../../components/Layout/LayoutScreen'



const CreateWud = () => {
  const { t } = useTranslation()

  const navigation: any = useNavigation()
  const dispatch = useDispatch()
  const types = useSelector((state: RootState) => state.createWud.category)

  const handleClick = (category: IWudtime['category']) => {
    dispatch(addCategory(category))
    navigation.navigate('Step2Type', { category })
  }


  return (
    <LayoutScreen>
      <View style={styles.container}>
        <View style={styles.screen}>
          <TouchableOpacity onPress={(category) => handleClick('fun')}>
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
          <TouchableOpacity onPress={(category) => handleClick('skills')}>
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
          <TouchableOpacity onPress={(category) => handleClick('purpose')}>
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
    </LayoutScreen>
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