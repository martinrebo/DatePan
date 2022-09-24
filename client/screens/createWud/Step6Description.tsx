
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, ImageSourcePropType } from 'react-native'
import { Button, Card, Input, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addNotes, addUserData } from '../../redux/wudSlice'
// import { Wudtime } from '../../interfaces/wudtime'
import { useCreateWudTimeQuery } from '../../api/api';
import { auth } from '../../firebase'
import LayoutScreen from '../../components/Layout/LayoutScreen'


const Step3Activity = ({ route }: any) => {
  const navigation: any = useNavigation()
  const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(true)

  dispatch(addUserData({
    userId: auth.currentUser?.uid!,
    displayName: auth.currentUser?.displayName!,
    photoURL: auth.currentUser?.photoURL! as ImageSourcePropType

  }))

  const createWudState = useSelector((state: RootState) => state.createWud)

  const { data, error, isLoading } = useCreateWudTimeQuery(createWudState, { skip })

  const handleSubmit = () => {
    console.log("send to API", createWudState)
    setSkip(false)
  }

  useEffect(() => {
    setSkip(true)
    return () => {
      navigation.navigate('Home')
      // TODO: ADD ERROR, LOADING AND SUCCESS HANDLING
    }
  }, [skip])



  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    dispatch(addNotes(value))
    setValue(value)
  }


  return (
    <LayoutScreen>
      <View style={styles.container}>
        <View style={styles.screen}>

          <Card>
            <Text> type {JSON.stringify(category)}</Text>
            <Text> wudType {JSON.stringify(wudType)}</Text>
            <Text> activity {JSON.stringify(activity)}</Text>
          </Card>
          <Card>
            <Input
              label="Description"
              placeholder="Describe your activity"
              maxLength={144}
              multiline={true}
              onChangeText={value => handleChange(value)} />
          </Card>

        </View>

        <Button title="Submit" onPress={handleSubmit} />
        {/* {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>Error! {error}</Text> : null} */}

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
    marginTop: 100,
  },
  screen: {
    maxWidth: 500
  },
  button: {
    marginTop: 10
  }
})
