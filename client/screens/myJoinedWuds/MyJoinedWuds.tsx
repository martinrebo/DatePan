import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'
import { useMyJoinedWudsQuery } from '../../api/api'
import { Wudtime } from '../../interfaces/wudtime'
import { Button, Card } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'

type Props = {}

export default function MyJoinedWuds({ }: Props) {
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
  const { data, error, isLoading, refetch } = useMyJoinedWudsQuery(userId)

  const handleGoHome = () => {
    navigation.navigate('Home')
  }
  console.log("data my wuds", data)
  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])
  // console.log(data)

  return (
    <>
      <View>
        <Button title="<" onPress={handleGoHome} />
        <Text>My Joined Wuds</Text>
        {data?.documents?.map((wud: any, i) => {
          return (
            <View key={i}>
              <Text>{isLoading ? "...Loading" : null}</Text>
              <Card>
                <Text>{wud.data.type}</Text>
                <Text>{wud.data.subtype}</Text>
                <Text>{wud.data.activity}</Text>
                <Text>{wud.data.notes}</Text>

              </Card>

            </View>
          )
        })}

      </View>


    </>
  )
}