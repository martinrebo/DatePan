
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, ImageSourcePropType } from 'react-native'
import { Button, Card, Input, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { ref, set } from "firebase/database";

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addNotes, addUserData } from '../../redux/wudSlice'
import { useCreateWudTimeQuery } from '../../api/api';
import { auth, realTimedDB } from '../../firebase'
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

  // const { data, error, isLoading } = useCreateWudTimeQuery(createWudState, { skip })

  const handleSubmit = () => {
    // TODO: Fix Date storage in Firebase Realtime Database.
    // TODO: Create realTime DataBase 
        // set(ref(realTimedDB, 'events/'), {
        //   event: createWudState
        // });
        console.log("LOG: Create WudState," , createWudState)
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
              maxLength={250}
              multiline={true}
              onChangeText={value => handleChange(value)}
              inputStyle={{height: 200, width: 250}}
              errorStyle={{color: 'grey'}}
              errorMessage={`Char Left = ${250 - value.length}`}
               />
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
