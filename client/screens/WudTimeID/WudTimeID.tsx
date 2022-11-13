import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Linking from 'expo-linking'
import { useNavigation } from '@react-navigation/native'
import { useGetWudTimebyIdQuery, useJoinWudTimeMutation, } from '../../api/api'
import Wud from '../../components/Wud/Wud'
import { Button, Card, Divider } from 'react-native-elements'
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

    const handleJoin = (wudID: string) => {
        joinWudTime({
            id: wudID,
            user: {
                id: userId,
                displayName: userName,
                photoURL: userPhotoURL
            }
        }).then(() => {
            navigation.navigate("MyJoinedWuds")
        }).catch((e) => {
            console.log("error", e)
        })
    }

    const handleJoined = (joiners: any) => {
        let joined = checkJoined(joiners, userId)
        return joined
    }

    console.log('DAta joiners', data)
    console.log('DAta joiners', userId)
    
    return (
        <LayoutScreen >
            {isLoading ? <Text>Loading...</Text> :
                isSuccess ?

                    <Card>
                        <Wud data={data?.event.data} joiners={data.event.joiners} />
                        <Divider width={5}/>
                        <Button title={checkJoined(data?.event.joiners, userId) ? "Joined" : "Join"}
                            disabled={handleJoined(data?.event.joiners)}
                            onPress={() => handleJoin(data?.event._id)}
                        />
                    </Card>


                    :
                    <Text> ... Error </Text>
            }

        </LayoutScreen>
    )
}

export default WudTimeID