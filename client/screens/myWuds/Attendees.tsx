import { GestureResponderEvent, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Image, ListItem, Overlay, Text } from 'react-native-elements'
import { useCheckJoinerMutation } from '../../api/api'
type Props = {
    joiners: any,
    eventId: string
}

const Attendees = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleOverlay = ()=> {
        setIsVisible(!isVisible)
    }

    const [checkJoiner, result] = useCheckJoinerMutation()

    // When AdminUser Click on Checkbox => Joiner user status: 'true' vs 'false'
    const handleJoinerCheckIn = (checked: boolean, joinerId: string) => {
        // update DB Event.joiners.id/checked,
        checkJoiner({
            eventId: props.eventId,
            joinerId, checked: !checked
        }).catch(()=> console.log('check error'))
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
                            <ListItem.CheckBox checked={!!joiner.checked} onPress={() => handleJoinerCheckIn(!!joiner.checked, joiner.id)} />
                        </ListItem>
                    )
                })}
            </Overlay>
        </Card>
    )
}

export default Attendees