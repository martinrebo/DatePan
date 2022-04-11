import { View, Text } from 'react-native'
import React from 'react'
import { useGetWudTimesQuery } from '../../api/api'
import { Button, Card } from 'react-native-elements'
import { auth } from '../../firebase'

type Props = {}

const Wudtimes = (props: Props) => {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")

  console.log("data wudtimes", data)

  const handleJoin = () => {
    console.log("join")
    let userId = auth.currentUser?.uid!

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
              <Text>{wud.data.location}</Text>
              <Text>{wud.data.date}</Text>
              <Text>{wud.data.time}</Text>
              <Text>{wud.data.duration}</Text>
              <Text>{wud.data.userId}</Text>
              <Button title="Join" onPress={handleJoin} />
            </Card>
          </View>
        )
        : <Text> No Data </Text>}

    </View>
  )
}


export default Wudtimes