import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Linking from 'expo-linking'
import { useNavigation } from '@react-navigation/native'
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

    const [joinWudTime] = useJoinWudTimeMutation()
    const navigation: any = useNavigation()

    let userId = auth.currentUser?.uid!
    let userName = auth.currentUser?.displayName!
    let userPhotoURL = auth.currentUser?.photoURL!

console.log("WudtimeID Data", data)
    const handleJoin = (wudID: string) => {
        joinWudTime({
            id: wudID,
            user: {
                id: userId,
                displayName: userName,
                photoURL: userPhotoURL
            }
        }).then(() => {
            navigation.navigate("MyWuds")
        }).catch((e) => {
            console.log("error", e)
        })
    }

    const handleJoined = (joiners: any) => {
        let joined = checkJoined(joiners, userId)
        return joined
    }

    console.log('data', data)
    return (
        <LayoutScreen >
            {isLoading ? <Text>Loading...</Text> :
                isSuccess ?

                    <Card>
                        <Wud data={data?.documents[0].data} joiners={data.documents[0].joiners} />
                        <Button title={checkJoined(data?.documents[0]?.joiners, userId) ? "Joined" : "Join"}
                            disabled={handleJoined(data?.documents[0]?.joiners)}
                            onPress={() => handleJoin(data?.documents[0]?._id)}
                        />
                    </Card>


                    :
                    <Text> ... Error </Text>
            }

        </LayoutScreen>
    )
}

export default WudTimeID