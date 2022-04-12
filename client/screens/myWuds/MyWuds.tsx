import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'
import { useMyWudsQuery } from '../../api/api'
import { Wudtime } from '../../interfaces/wudtime'
import { Button, Card, Image } from 'react-native-elements'
import { useNavigation, useIsFocused } from '@react-navigation/native'

type Props = {}

export default function MyWuds({ }: Props) {
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''
  const { data, error, isLoading, refetch } = useMyWudsQuery(userId)

  const handleGoHome = () => {
    navigation.navigate('Home')
  }
  console.log("data my wuds", data)
  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])

  return (
    <>
      <View>
        <Button title="<" onPress={handleGoHome} />
        <Text>MyWuds</Text>
        {data?.documents?.map((wud: any, i) => {
          return (
            <View key={i}>
              <Text>{isLoading ? "...Loading" : null}</Text>
              <Card>
                <Text>{wud.data.type}</Text>
                <Text>{wud.data.subtype}</Text>
                <Text>{wud.data.activity}</Text>
                <Text>{wud.data.notes}</Text>
                <Card>
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

              </Card>

            </View>
          )
        })}

      </View>


    </>
  )
}