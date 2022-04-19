import { View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useGetWudTimesQuery } from '../../api/api'
import { Button, Card, Avatar, Text, Divider, ListItem } from 'react-native-elements'
import { auth } from '../../firebase'
import { useJoinWudTimeMutation } from '../../api/api'
import { addActivityEmoji, addCategoryEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import { WUDS } from '../../constants/WUDS'
import wudSlice from '../../redux/wudSlice'
import { IWudtime } from '../../interfaces/wudtime'
import Wud from '../../components/Wud/Wud'
import { checkJoined } from '../../helpers'
import { useNavigation } from '@react-navigation/core'
type Props = {
  navigation: any
}

function Wudtimes({ }: Props) {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")
  const [joinWudTime] = useJoinWudTimeMutation()
  const navigation: any = useNavigation()

  let userId = auth.currentUser?.uid!
  let userName = auth.currentUser?.displayName!
  let userPhotoURL = auth.currentUser?.photoURL!

  const handleJoin = (wudID: string) => {
    joinWudTime({
      id: wudID,
      user: {
        id: userId,
        displayName: userName,
        photoURL: userPhotoURL
      }
    }).then(() => {
      navigation.navigate("myWuds")
    }).catch((e) => {
      console.log("error", e)
    })
  }



  const handleJoined = (joiners: any) => {
    let joined = checkJoined(joiners, userId)
    return joined
  }


  return (
    <>
      <LayoutScreen>
        <Text>{isLoading ? "...Loading" : null}</Text>
        {isSuccess ?
          data?.documents?.map((wud: any, i) =>

            <Card key={i}>
              <Wud data={wud.data} />
              <Card>
                <Text >  Attendees: {wud.joiners?.length ? wud.joiners.length : 0} </Text>
                <Button title={checkJoined(wud.joiners, userId) ? "Joined" : "Join"}
                  disabled={handleJoined(wud.joiners)}
                  onPress={() => handleJoin(wud._id)}
                />
              </Card>

            </Card>

          )
          : <Text> No Data </Text>}

      </LayoutScreen>
    </>
  )
}


export default Wudtimes

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})
