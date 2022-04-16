import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useGetWudTimesQuery } from '../../api/api'
import { Button, Card, Avatar, Text, Divider, ListItem } from 'react-native-elements'
import { auth } from '../../firebase'
import { useJoinWudTimeMutation } from '../../api/api'
import { addActivityEmoji, addCategoryEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'

type Props = {
  navigation: any
}

function Wudtimes({ navigation }: Props) {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")
  const [joinWudTime] = useJoinWudTimeMutation()

  const handleJoin = (wudID: string) => {
    let userId = auth.currentUser?.uid!
    let userName = auth.currentUser?.displayName!
    let userPhotoURL = auth.currentUser?.photoURL!

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

  return (
    <>
      <LayoutScreen>
        <Text>{isLoading ? "...Loading" : null}</Text>
        {isSuccess ?
          data?.documents?.map((wud: any, i) => <View key={i}>
            <Card>
              <Text> Friday 2 June </Text>
              <Text h1>
                {addActivityEmoji[wud.data.activity as keyof typeof addActivityEmoji].emoji}
              </Text>
              <Text h2>{capitalize(wud.data.activity)}</Text>
              <Text> From 10: 00  to 11: 00 </Text>
              <Divider />
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
              <Text>  {addCategoryEmoji[wud.data.category as keyof typeof addCategoryEmoji].emoji} </Text>
              <Button title="Join" onPress={() => handleJoin(wud._id)} />
            </Card>
          </View>
          )
          : <Text> No Data </Text>}


      </LayoutScreen>
    </>
  )
}


export default Wudtimes

const sytles = StyleSheet.create({
  container: {
    maxWidth: 500,
  }
})
