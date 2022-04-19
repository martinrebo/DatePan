import React, { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../../firebase'
import { useMyJoinedWudsQuery } from '../../api/api'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import Wud from '../../components/Wud/Wud'

type Props = {}

export default function MyJoinedWuds({ }: Props) {
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
  const { data, error, isLoading, refetch } = useMyJoinedWudsQuery(userId)

  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])


  return (
    <LayoutScreen>
      <Text>{isLoading ? "...Loading" : null}</Text>
      {data?.documents?.map((wud: any, i) => {
        return (
          <View key={i}>
            <Card >
              <Wud data={wud.data} />
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