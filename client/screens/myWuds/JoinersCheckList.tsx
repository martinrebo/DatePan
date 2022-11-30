import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Image, Icon, Button, Overlay, Input, Text, Card } from 'react-native-elements'
import { useCheckJoinerMutation, useGetWudTimebyIdQuery } from '../../api/api'

type Props = {
    route: any
}

export default function JoinersCheckList({ route }: Props) {
    const [isVisible, setIsVisible] = useState(false)
    const toggleOverlay = () => {
        setIsVisible(!isVisible)
    }
    const { wudId } = route.params
    const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(wudId)

    const [checkJoiner, { isLoading: isUpdating }] = useCheckJoinerMutation()
console.log('chekcouoj', data)
    // When AdminUser Click on Checkbox => Joiner user status: 'true' vs 'false'
    const handleJoinerCheckIn = (checked: boolean, joinerId: string) => {
        // update DB Event.joiners.id/checked,
        checkJoiner({
            eventId: wudId,
            joinerId,
            checked: !checked,
            groupId: data?.event.data.group.id
            
        }).catch(() => console.log('check error'))
    }
    const [participant, setParticipant] = useState({ id: 'notUser', name: '', contact: '' })
    const handleSave = () => {
        checkJoiner({
            eventId: wudId,
            joinerId: 'notUser',
            participant,
            checked: true
        }).catch(() => console.log('check error'))
        setIsVisible(!isVisible)
        setParticipant({ id: 'notUser', name: '', contact: '' })
    }

    return (
        <View>
            <Card>
                <Button title="Add New Participant"
                    onPress={toggleOverlay} />
            </Card>
            <Card>
                {data?.event.joiners?.map((joiner: any, i: number) => {
                    return (
                        <ListItem key={i}
                            bottomDivider>
                            <Image source={{ uri: joiner.photoURL }}
                                style={{ width: 25, height: 25 }} />
                            <ListItem.Content>
                                <ListItem.Title>{joiner.displayName}</ListItem.Title>
                            </ListItem.Content>
                            {isUpdating ? <Icon name="refresh" type="material" tvParallaxProperties={undefined} /> : null}
                            <ListItem.CheckBox checked={!!joiner.checked} onPress={() => handleJoinerCheckIn(!!joiner.checked, joiner.id)} />
                        </ListItem>
                    )
                })}
            </Card>
            <Overlay onBackdropPress={toggleOverlay} isVisible={isVisible}>
                <Text> Add participant </Text>
                <Input placeholder="name" onChangeText={value => setParticipant({ ...participant, name: value })} />
                <Input placeholder="contact" onChangeText={value => setParticipant({ ...participant, contact: value })} />
                <Button title="Save" onPress={handleSave} />
            </Overlay>
        </ View>
    )
}