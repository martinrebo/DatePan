import { StyleSheet } from 'react-native'
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
// console.log('wudtiame,data', data)
    // TODO: ADD Validation and Date and Time 
    //toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }
    let date = new Date(data?.date!).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    let startTime = new Date(data?.startTime!).toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" })
    return (
        <>
            <Text> {date} </Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> Start: {startTime}</Text>
            <Text> Duration: {data.duration} hours </Text>
            <Divider style={{ padding: 5 }} />

            <Text> {data.place?.value.description}</Text>
            <Divider style={{ padding: 5 }} />
            { !hideHostedBy ?
                <Card >
                    <Text> Hosted By: </Text>
                    <ListItem>
                        <Avatar
                            rounded
                            size="medium"
                            source={{
                                uri: data?.photoURL!,
                            }} />
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