import { View, Text } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking'
import { useNavigation } from '@react-navigation/core'
import { useGetWudTimebyIdQuery, useJoinWudTimeMutation, } from '../../api/api'
import Wud from '../../components/Wud/Wud'
import { Button, Card } from 'react-native-elements'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import { auth } from '../../firebase'
import { checkJoined } from '../../helpers'

type Props = {}

const WudTimeID = ({ route }: any) => {

    const { id } = route.params
    const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(id)

    console.log("data", data?.documents)

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
        <LayoutScreen >
            {isLoading ? <Text>Loading...</Text> :
                isSuccess ?

                    <Card>
                        <Wud data={data?.documents[0].data} />
                        <Button title={checkJoined(data?.documents[0].joiners, userId) ? "Joined" : "Join"}
                            disabled={handleJoined(data?.documents[0].joiners.joiners)}
                            onPress={() => handleJoin(data?.documents[0].joiners._id)}
                        />
                    </Card>


                    :
                    <Text> ... Error </Text>
            }

        </LayoutScreen>
    )
}

export default WudTimeID