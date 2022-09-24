import React, { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../../firebase'
import { useMyWudsQuery } from '../../api/api'
import { IWudtime } from '../../interfaces/wudtime'
import { Button, Card, Image, Text } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { addActivityEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import Wud from '../../components/Wud/Wud'

type Props = {}

export default function MyWuds({ }: Props) {
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
  const { data, error, isLoading, refetch } = useMyWudsQuery(userId)

  // const handleGoHome = () => {
  //   navigation.navigate('Home')
  // }

  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])

  return (
    <LayoutScreen>
      <Text>{isLoading ? "...Loading" : null}</Text>
      {
        data?.documents?.map((wud: any, i) => {
          return (
            <Card key={i}>
              <Wud data={wud.data} joiners={wud.joiners} />
              <Card>
                <Text> {wud.joiners?.length ? wud.joiners?.length : 0} Attendees : </Text>
                {wud?.joiners?.map((j: any, i: number) => {
                  return (
                    <View key={i}>
                      <Text>{j.displayName}</Text>
                      <Image source={{ uri: j.photoURL }}
                        style={{ width: 25, height: 25 }} />
                    </View>
                  )
                })}
              </Card>
              <Button title="Group Chat"
                onPress={() => navigation.navigate('Chat', { wudId: wud._id })} />
            </Card>
          )
        })
      }
    </LayoutScreen >
  )
}