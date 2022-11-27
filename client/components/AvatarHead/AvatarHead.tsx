import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'


type Props = {}

const AvatarHead = () => {
    const navigation: any = useNavigation()
    return (
        <View style={{ marginLeft: 20 }} >
            <Avatar
                rounded
                source={{
                    uri: auth?.currentUser?.photoURL!,
                }}
                onPress={() => navigation.navigate('ProfileView')}
            />
        </View>
    )
}

export default AvatarHead