import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Linking from 'expo-linking'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native'
import { useGetWudTimebyIdQuery, useJoinWudTimeMutation, } from '../../api/api'
import Wud from '../../components/Wud/Wud'
import { Button, Card, Divider } from 'react-native-elements'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import { auth } from '../../firebase'
import { checkJoined } from '../../helpers'

type Props = {}

const WudTimeID = ({ route }: any) => {

  const { id } = route.params
  const navigation: any = useNavigation()

  const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(id)
  const [joinWudTime] = useJoinWudTimeMutation()

  let userId = auth.currentUser?.uid!
  let userName = auth.currentUser?.displayName!
  let userPhotoURL = auth.currentUser?.photoURL!

  const handleJoin = (wudID: string) => {
    joinWudTime({
      id: wudID,
      user: {
        id: userId,
        displayName: userName,
        photoURL: userPhotoURL
      }
    }).then(() => {
      navigation.navigate("MyJoinedWuds")
    }).catch((e) => {
      console.log("error", e)
    })
  }

  const handleJoined = (joiners: any) => {
    let joined = checkJoined(joiners, userId)
    return joined
  }

  return (
    <LayoutScreen >
      {isLoading ? <Text>Loading...</Text> :
        isSuccess ?

          <Card>
            <Wud data={data?.event.data} joiners={data.event.joiners} />
            <Card>
              <Button title={checkJoined(data?.event.joiners, userId) ? "Joined" : "Join"}
                disabled={handleJoined(data?.event.joiners) || !auth.currentUser}
                onPress={() => handleJoin(data?.event._id)}
              />
            </Card>
            {!auth.currentUser ? <>
              <Card>
                <Button title='Login' onPress={() => navigation.navigate('Login', { id: data?.event._id })} />
              </Card>
            </> : null}
          </Card>
          
          :
          <Text> ... Error </Text>
      }

    </LayoutScreen>
  )
}

export default WudTimeID