import { View, Text } from 'react-native'
import React from 'react'
import { useGetWudTimesQuery } from '../../api/api'
import { Button, Card } from 'react-native-elements'
import { auth } from '../../firebase'
import { useJoinWudTimeMutation } from '../../api/api'

type Props = {}

const Wudtimes = (props: Props) => {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")
  const [joinWudTime] = useJoinWudTimeMutation()

  console.log("data wudtimes", data)

  const handleJoin = (wudID: string) => {
    console.log("join", wudID)
    let userId = auth.currentUser?.uid!
    let userName = auth.currentUser?.displayName!
    let userPhotoURL = auth.currentUser?.photoURL!

    joinWudTime({
      id: wudID,
      user: {
        id: userId,
        displayName: userName,
        photoURL: userPhotoURL
      }
    }).then(() => {
      console.log("joined")
    }).catch((e) => {
      console.log("error", e)
    })
  }

  return (
    <View>
      <Text>Wudtimes</Text>
      <Text>{isLoading ? "...Loading" : null}</Text>
      {isSuccess ?
        data?.documents?.map((wud: any, i) =>

          <View key={i}>
            <Card>
              <Text>{wud.data.type}</Text>
              <Text>{wud.data.subtype}</Text>
              <Text>{wud.data.activity}</Text>
              <Text>{wud.data.notes}</Text>
              {/* <Text>{wud.data.location}</Text>
              <Text>{wud.data.date}</Text>
              <Text>{wud.data.time}</Text>
              <Text>{wud.data.duration}</Text> */}
              <Text>USERID: {wud.data.userId}</Text>
              <Text>WUDID: {wud._id}</Text>
              <Button title="Join" onPress={() => handleJoin(wud._id)} />
            </Card>
          </View>
        )
        : <Text> No Data </Text>}

    </View>
  )
}


export default Wudtimes