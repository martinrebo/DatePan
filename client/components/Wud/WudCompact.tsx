import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';

import { Card, Divider, Button, Text } from 'react-native-elements'
import { addActivityEmoji } from '../../helpers/addEmoji'
import { IWudtime } from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'
import { useNavigation } from '@react-navigation/core'

type Props = {
    data: IWudtime
    id: string
}


const WudCompact = ({ data, id }: Props) => {
    const navigation: any = useNavigation()
    const goToWud = () => {
        navigation.navigate("WudTimeID", { id })
    }
    let date = new Date(data?.date!).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    let startTime = new Date(data?.startTime!).toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" })
    let endTime = new Date(data?.endTime!).toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" })
    
    const handleGoToMaps = (placeId: string, placeDescription: string) => {
        console.log(placeId, placeDescription)
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${placeDescription}&query_place_id=${placeId}`);
    }
    return (

        <>
            <Text> 📅 {date} </Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> ⏳ Duration: {data.duration} hours </Text>
            <Divider style={{ padding: 5 }} />
            <TouchableOpacity onPress={()=>handleGoToMaps(data.place?.value.place_id, data.place?.value.description)}>
                <Text> 📌 {data.place?.value.description}</Text>
            </TouchableOpacity>
            
            <Divider style={{ padding: 5 }} />
            <Button title="Go to Wud" onPress={() => goToWud()} />
        </>
    )
}

export default WudCompact

const styles = StyleSheet.create({})