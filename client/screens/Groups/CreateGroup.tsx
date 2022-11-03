import React, { useState } from 'react'
import { Input, Text, Card, Button } from 'react-native-elements'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/core'
import { useCreateGroupMutation } from '../../api/api'

type Props = {}

export default function CreateGroup({ }: Props) {
    const navigation = useNavigation()
    const { t } = useTranslation()
    const [createGroup, { isLoading: isUpdating } ] = useCreateGroupMutation()

    const [groupData, setGroupData] = useState({
        groupName: '',
        description: '',
        image: '',
        kpi: '',

    })

    const handleInput = (value: string, field: string) => {
        setGroupData( { ...groupData, [field]: value})

    }

    const handleSend = async () => {
        try {
            createGroup(groupData)
        }
        catch (err) {
            console.log(err)
        }
        
    }
    return (
        <>
            <Text> Create Group </Text>
            <Card>
                <Input label={'Name of the Group'} onChangeText={(value) => handleInput(value, 'groupName')} />
            </Card>
            <Card>
                <Input label={'Description of the Group'} onChangeText={(value) => handleInput(value, 'description')} />
            </Card>
            <Card>
                <Text> Image </Text>
            </Card>
            <Card>
                <Input label={'KPI1'} onChangeText={(value) => handleInput(value, 'kpi')}/>
            </Card>
            <Card>
                <Button title={'Create'} onPress={handleSend}/>
            </Card>

        </>

    )
}