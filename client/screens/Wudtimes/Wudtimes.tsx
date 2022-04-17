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
import { Wudtime } from '../../interfaces/wudtime'
type Props = {
  navigation: any
}

function Wudtimes({ navigation }: Props) {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")
  const [joinWudTime] = useJoinWudTimeMutation()

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
      console.log("joined")
      // Go to chat or Individual Wud
    }).catch((e) => {
      console.log("error", e)
    })
  }

  const goHome = () => {
    navigation.navigate('Home')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL!,
            }}
            onPress={() => navigation.navigate('ProfileView')} />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={{
          marginRight: 10
        }}
          onPress={goHome}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      )
    })
  }, [navigation])
  console.log(data)


  function capitalize(s: string) {
    if (typeof s !== 'string')
      return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  function checkJoined(joiners: [] | undefined) {
    if (joiners === undefined) {
      return false
    }
    if (joiners.some((j: any) => j.id === userId)) {
      return true
    }
  }

  return (
    <>
      <LayoutScreen>
        <Text>{isLoading ? "...Loading" : null}</Text>
        {isSuccess ?
          data?.documents?.map((wud: any, i) =>

            <Card key={i}>
              <Text> Friday 2 June </Text>
              <Text h1>
                {addActivityEmoji[wud.data.activity as keyof typeof addActivityEmoji].emoji}
              </Text>
              <Text h4>{capitalize(wud.data.activity)}</Text>
              <Text> From 10: 00  to 11: 00 </Text>
              <Divider style={{ padding: 5 }} />

              <Text> {wud.data.place}</Text>
              <Text> {wud.data.address}  </Text>
              <Text> {wud.data.city}  </Text>
              <Divider style={{ padding: 5 }} />
              <Card>
                <Text> Hosted By: </Text>
                <ListItem>
                  <Avatar
                    size="medium"
                    source={wud.data.photoURL} />
                  <ListItem.Content>
                    <Text> {wud.data.displayName}</Text>
                  </ListItem.Content>
                </ListItem>
              </Card>
              <Card>
                <Text>{wud.data.notes}</Text>

              </Card>
              <Card>
                <Text h4>
                  {addCategoryEmoji[wud.data.category as keyof typeof addCategoryEmoji].emoji}

                </Text>

                <Text >  Attendees: {wud.joiners?.length ? wud.joiners.length : 0} </Text>
                <Button title={checkJoined(wud.joiners) ? "Joined" : "Join"}
                  disabled={checkJoined(wud.joiners)}
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
