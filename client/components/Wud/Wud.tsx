import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

import { Card, Divider, ListItem, Avatar, Text } from 'react-native-elements'
import { addActivityEmoji } from '../../helpers/addEmoji'
import { IWudtime } from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'

type Props = {
    data: IWudtime,
    joiners: any,
    hideHostedBy?: boolean
}

const Wud = ({ data, joiners, hideHostedBy }: Props) => {

    // TODO: ADD Validation and Date and Time 
    return (
        <>
            <Text> TODO: Friday 2 June </Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> TODO: From 10: 00  to 11: 00 </Text>
            <Divider style={{ padding: 5 }} />

            <Text> {data.place?.value.description}</Text>
            <Divider style={{ padding: 5 }} />
            { !hideHostedBy ?
                <Card >
                    <Text> Hosted By: </Text>
                    <ListItem>
                        <Avatar
                            size="medium"
                            source={data.photoURL!} />
                        <ListItem.Content>
                            <Text> {data.displayName}</Text>
                        </ListItem.Content>
                    </ListItem>
                </Card>
            : null }
            <Card>
                <Text>{data.notes}</Text>
            </Card>
            <Card>
                <Text> joiners: {joiners?.length ? joiners?.length : 0} </Text>
            </Card>

        </>
    )
}

export default Wud

const styles = StyleSheet.create({})