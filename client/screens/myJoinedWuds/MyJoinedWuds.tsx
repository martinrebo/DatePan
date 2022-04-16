import React, { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../../firebase'
import { useMyJoinedWudsQuery } from '../../api/api'
import { Wudtime } from '../../interfaces/wudtime'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { addActivityEmoji } from '../../helpers/addEmoji'

type Props = {}

export default function MyJoinedWuds({ }: Props) {
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
  const { data, error, isLoading, refetch } = useMyJoinedWudsQuery(userId)

  const handleGoHome = () => {
    navigation.navigate('Home')
  }
  // console.log("data my wuds", data)
  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])
  // console.log(data)

  return (
    <>
      <View>
        <Text>My Joined Wuds</Text>
        <Text>{isLoading ? "...Loading" : null}</Text>
        {data?.documents?.map((wud: any, i) => {
          return (
            <View key={i}>
              <Card>
                <Text h2>{addActivityEmoji[wud.data.activity].emoji}</Text>
                <Text>{wud.data.type}</Text>
                <Text>{wud.data.wudType}</Text>
                <Text>{wud.data.activity}</Text>
                <Text>{wud.data.notes}</Text>
                <Text>{wud._id}</Text>
                <Button title="Group Chat"
                  onPress={() => navigation.navigate('Chat', { wudId: wud._id })} />
              </Card>



            </View>
          )
        })}

      </View>


    </>
  )
}