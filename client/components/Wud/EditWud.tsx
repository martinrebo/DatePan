import { StyleSheet } from 'react-native'
import React from 'react'

import { Card, Divider, Text,  Icon } from 'react-native-elements'
import { addActivityEmoji } from '../../helpers/addEmoji'
import { IWudtime, IWudtimeResponse}  from '../../interfaces/wudtime'
import { capitalize } from '../../helpers'

type Props = {
    data: IWudtimeResponse['event']['data'],
    handleEdit: (field: string) => void
}

const EditWud = ({ data, handleEdit }: Props) => {

    // TODO: ADD Validation and Date and Time 
     console.log(data)
    return (
        <>
            <Text> TODO: Friday 2 June <Icon name="edit" type="font-awesome" tvParallaxProperties={undefined}
                    onPress={()=>handleEdit('date')} /></Text>
            <Text h1>
                {addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji ?
                    addActivityEmoji[data.activity as keyof typeof addActivityEmoji]?.emoji : "error"}
            </Text>
            <Text h4>{capitalize(data.activity)}</Text>
            <Text> TODO: START: From 10: 00  to 11: 00 <Icon name="edit" type="font-awesome" tvParallaxProperties={undefined}
                    onPress={()=>handleEdit('time')} /> </Text>
            <Divider style={{ padding: 5 }} />

            <Text> {data.place?.value.description} </Text>
            <Divider style={{ padding: 5 }} />
            <Card>
                <Text>{data.notes} <Icon name="edit" type="font-awesome" tvParallaxProperties={undefined}
                    onPress={()=>handleEdit('notes')} /></Text>
            </Card>
            <Card>
                <Text> KPIS: <Icon name="edit" type="font-awesome" tvParallaxProperties={undefined}
                    onPress={()=>handleEdit('notes')} /></Text>
            </Card>

        </>
    )
}

export default EditWud

const styles = StyleSheet.create({})