import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

import { Card, Divider, ListItem, Avatar, Text } from 'react-native-elements'
import { addActivityEmoji } from '../../helpers/addEmoji'
import { IWudtime } from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'

type Props = {
    data: IWudtime
}

const WudCompact = ({ data }: Props) => {
    console.log(data)
    return (

        <>
            <Text> Friday 2 June </Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> From 10: 00  to 11: 00 </Text>
            <Divider style={{ padding: 5 }} />
            <Text> {data.place?.value.description}</Text>
            <Divider style={{ padding: 5 }} />

        </>
    )
}

export default WudCompact

const styles = StyleSheet.create({})