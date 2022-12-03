import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useGetWudTimebyIdQuery, useJoinWudTimeMutation, useUnJoinWudTimeMutation } from '../../api/api'
import Wud from '../../components/Wud/Wud'
import { Button, Card, Text} from 'react-native-elements'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import { auth } from '../../firebase'
import { checkJoined } from '../../helpers'

type Props = {}

const WudTimeID = ({ route }: any) => {

  const { id } = route.params
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid!
  let userName = auth.currentUser?.displayName!
  let userPhotoURL = auth.currentUser?.photoURL!
  const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(id)
  const [joinWudTime] = useJoinWudTimeMutation()
  const [unJoinWudTime] = useUnJoinWudTimeMutation()

  const [ joinButtonTitle, setJoinButtonTitle] = useState('Join')
 // When component loads check if user already join
 if (checkJoined(data?.event?.joiners, userId))setJoinButtonTitle('Unjoin')


  const handleJoin = (wudID: string) => {
    setJoinButtonTitle('Unjoin')
    joinWudTime({
      id: wudID,
      groupId: data?.event.data.group.id,
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

  const handleUnJoin = (wudID: string) => {
    setJoinButtonTitle('Join')
    unJoinWudTime({
      id: wudID,
      user: {
        id: userId,
        displayName: userName,
        photoURL: userPhotoURL
      }
    }).then(() => {
      navigation.navigate("Home")
    }).catch((e) => {
      console.log("error", e)
    })
  }

  let owner = (userId === data?.event.data.userId) ? true : false

  return (
    <LayoutScreen >
      {isLoading ? <Text>Loading...</Text> :
        isSuccess ?

          <Card>
            <Wud data={data?.event.data} joiners={data.event.joiners} />
            <Card>
              {checkJoined(data?.event?.joiners, userId) ?
                <Button title={joinButtonTitle}
                disabled={owner || !auth.currentUser}
                onPress={() => handleUnJoin(data?.event._id)} />
                :
                <Button title={joinButtonTitle} 
                  disabled={owner || !auth.currentUser}
                  onPress={() => handleJoin(data?.event._id)}
                />}
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