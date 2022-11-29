
import { useState, useEffect } from 'react'
import { StyleSheet, View, ImageSourcePropType } from 'react-native'
import { Button, Card, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addNotes, addUserData, addPrivateEvent, addGroup } from '../../redux/wudSlice'
import { useCreateWudTimeQuery } from '../../api/api';
import { auth } from '../../firebase'
import LayoutScreen from '../../components/Layout/LayoutScreen'


const Step6Description = ({ route }: any) => {
  const navigation: any = useNavigation()
  // const { category, wudType, activity } = route.params;
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(true)
  const [privateCheck, setPrivateCheck] = useState(false)

  dispatch(addUserData({
    userId: auth.currentUser?.uid!,
    displayName: auth.currentUser?.displayName!,
    photoURL: auth.currentUser?.photoURL! as ImageSourcePropType

  }))

  const createWudState = useSelector((state: RootState) => state.createWud)

  const { data, error, isLoading } = useCreateWudTimeQuery(createWudState, { skip })

  const handleSubmit = () => {
    if(auth.currentUser?.uid == 'Pc9aXKgqm5d10uqSvNRzQ24u0cW2' && process.env.BRAND === 'CBI') {
      dispatch(addGroup({id: 'Pc9aXKgqm5d10uqSvNRzQ24u0cW2', name: 'cbi'}))
    }
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

  const handlePrivacy = (value: boolean) => {
    dispatch(addPrivateEvent(value))
    setPrivateCheck(value)
  }

  // TODO: FIX : REFACTOR

console.log('step6')
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <View style={styles.screen}>
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
          <Card>
            <CheckBox title='Private Event - only people with link can access'
            onPress={()=> handlePrivacy(!privateCheck)}
            checked={privateCheck}
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

export default Step6Description

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  screen: {
    maxWidth: 500,
    minWidth: 300,
    borderWidth: 3,
    borderColor: 'red',
  },
  button: {
    marginTop: 10
  }
})
