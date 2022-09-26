import { View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Image, ListItem, Overlay, Text } from 'react-native-elements'

type Props = {
    joiners: any
}

const Attendees = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleOverlay = ()=> {
        setIsVisible(!isVisible)
    }
    return (
        <Card >
            <Text onPress={toggleOverlay}> {props.joiners?.length ? props.joiners?.length : 0} Attendees &gt; </Text>
            <Overlay onBackdropPress={toggleOverlay} isVisible={isVisible}>
                {props?.joiners?.map((joiner: any, i: number) => {
                    return (
                        <ListItem key={i}
                            bottomDivider>
                            <Image source={{ uri: joiner.photoURL }}
                                style={{ width: 25, height: 25 }} />
                            <ListItem.Content>
                                <ListItem.Title>{joiner.displayName}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.CheckBox onPress={() => console.log('Hello')} />
                        </ListItem>
                    )
                })}
            </Overlay>
        </Card>
    )
}

export default Attendees