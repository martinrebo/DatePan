import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {}



const GoHomeHead = ({ onPress }: any) => {

    return (
        <TouchableOpacity style={{
            marginRight: 10
        }}
            onPress={onPress}
        >
            <Text>Home</Text>
        </TouchableOpacity>
    )
}

export default GoHomeHead