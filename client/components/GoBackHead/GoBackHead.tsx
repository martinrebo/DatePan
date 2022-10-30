import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {}



const GoBackHead = ({ onPress }: any) => {
    return (
        <TouchableOpacity style={{
            marginRight: 10
        }}
            onPress={onPress}
        >
            <Text>Back</Text>
        </TouchableOpacity>
    )
}

export default GoBackHead