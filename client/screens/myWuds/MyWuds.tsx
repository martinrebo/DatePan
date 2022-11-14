import React, { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../../firebase'
import { useMyWudsQuery } from '../../api/api'
import { IWudtime } from '../../interfaces/wudtime'
import { Button, Card, Divider, Icon, Image, Text } from 'react-native-elements'
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
            <Card key={i} containerStyle={{ borderColor: 'blue' }}>
              <View style={{alignItems: 'flex-end'}}>
                <Icon name='pencil' type='font-awesome' 
                onPress={() => navigation.navigate('EditMyWuds', { wudId: wud._id })} />
              </View>
              <Wud data={wud.data} joiners={wud.joiners} hideHostedBy={true} />
              {/* <Button title="Attendees" onPress={handleGoToAttendees}/> */}
              <Card>
              <Button title="Participants Checklist"
                  onPress={() => navigation.navigate('JoinersCheckList', { wudId: wud._id })} />
              </Card>
              <Card>
              <Button title="Group Chat"
                  onPress={() => navigation.navigate('Chat', { wudId: wud._id })} />
              </Card>
              </Card>
             
          )
        })
      }
    </LayoutScreen >
  )
}