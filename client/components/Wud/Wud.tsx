import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

import { Card, Divider, ListItem, Avatar, Text } from 'react-native-elements'
import { addActivityEmoji, addCategoryEmoji } from '../../helpers/addEmoji'
import { IWudtime } from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'

type Props = {
    data: IWudtime
}

const Wud = ({ data }: Props) => {
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

            <Text> {data.place}</Text>
            <Text> {data.address}  </Text>
            <Text> {data.city}  </Text>
            <Divider style={{ padding: 5 }} />
            <Card>
                <Text> Hosted By: </Text>
                <ListItem>
                    <Avatar
                        size="medium"
                        source={data.photoURL} />
                    <ListItem.Content>
                        <Text> {data.displayName}</Text>
                    </ListItem.Content>
                </ListItem>
            </Card>
            <Card>
                <Text>{data.notes}</Text>
            </Card>

        </>
    )
}

export default Wud

const styles = StyleSheet.create({})