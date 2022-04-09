
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'

import { RootState} from '../../redux/store'
import { useSelector , useDispatch } from 'react-redux'
import { addType } from '../../redux/wudSlice'
import { useNavigation } from '@react-navigation/native'
import { Wudtime } from '../../interfaces/wudtime'

const CreateWud = () => {
  
  const navigation: any = useNavigation()
  const dispatch = useDispatch()
  const types = useSelector((state: RootState) => state.createWud.type)

  const handleClick = (type: Wudtime['type']) => { 
    
    dispatch(addType(type))
    navigation.navigate('Step2SubType', {type})
  }


  return (
    <View style={styles.container}>
      <View style={styles.screen}>
      <Card>
        <Text> By creating an WudTime event you commit to help other people to enjoy life</Text>
        <Text> ¿Which kind of Moment do you want to create ?</Text>
        <Text> Type: { types }</Text>
      </Card>
      <Card>
        <Card.Title>
          <Text> 😄 Fun and Pleasure</Text>
        </Card.Title>
        <Card.Divider />
        {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
        <Text> Help people by Create happiness in the present with activities just for fun and experience something new. </Text>
        <Text> Types of activities: Parties, go for a drink, travel, dating, ... </Text>
        <Button
        title={'GO >'} 
        containerStyle={styles.button}
        onPress={(type) => handleClick('fun')}/>
      </Card>
      <Card>
        <Card.Title>
          <Text> 🎸 Strenghts and Skills </Text>
        </Card.Title>
        <Card.Divider />
        {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
        <Text> Help people by practicing or teaching skills. Get surrounded by likeminded people</Text>
        <Text> Types of activities: Play intruments, teach a new language, meet people with same interests... </Text>
        <Button
        title={'GO >'}
        containerStyle={styles.button}
        onPress={() => handleClick('skills')}/>
      </Card>
      <Card>
        <Card.Title>
        <Text> ☯️ Meaning and Purpose </Text>
        </Card.Title>
        <Card.Divider />
        {/* <Card.Image source={require('../assets/images/wudLogo.png')} /> */}
        <Text> Help people to find meaning and live a purposeful life by Join your good cause </Text>
        <Text> Types of activities: NGOs, Random Act of Kindness, Help </Text>
        <Button
        title={'GO >'}
        containerStyle={styles.button}
        onPress={() => handleClick('purpose')}/>
        
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