import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Card, Divider, Button, Text } from 'react-native-elements'
import { addActivityEmoji } from '../../helpers/addEmoji'
import { IWudtime } from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'
import { useNavigation } from '@react-navigation/core'
import * as Linking from 'expo-linking'

type Props = {
    data: IWudtime
    id: string
}


const WudCompact = ({ data, id }: Props) => {
    const navigation: any = useNavigation()
    console.log(data)

    const goToWud = () => {
        navigation.navigate("WudTimeID", { id })
    }
    let date = new Date(data?.date!).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    let startTime = new Date(data?.startTime!).toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" })
    let endTime = new Date(data?.endTime!).toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" })
    return (

        <>
            <Text> {date} </Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> {startTime} - {endTime} </Text>
            <Divider style={{ padding: 5 }} />
            <Text> {data.place?.value.description}</Text>
            <Divider style={{ padding: 5 }} />
            <Button title="Go to Wud" onPress={() => goToWud()} />
        </>
    )
}

export default WudCompact

const styles = StyleSheet.create({})