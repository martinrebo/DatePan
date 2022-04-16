import React, { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../../firebase'
import { useMyJoinedWudsQuery } from '../../api/api'
import { Wudtime } from '../../interfaces/wudtime'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'

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
    <LayoutScreen>
      <Text>{isLoading ? "...Loading" : null}</Text>
      {data?.documents?.map((wud: any, i) => {
        return (
          <View key={i}>
            <Card >
              <Text>Friday 2 december </Text>
              <Text h2>{addActivityEmoji[wud.data.activity as keyof typeof addActivityEmoji].emoji}</Text>
              <Text>{wud.data.type}</Text>
              <Text>{wud.data.wudType}</Text>
              <Text>{wud.data.activity}</Text>
              <Text>Joiners: {wud.joiners.length ? wud.joiners.length : 0}</Text>
              <Button title="Group Chat"
                onPress={() => navigation.navigate('Chat', { wudId: wud._id })} />
            </Card>
          </View>
        )
      })}

    </LayoutScreen>
  )
}