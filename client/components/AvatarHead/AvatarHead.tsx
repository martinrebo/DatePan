import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { Avatar } from 'react-native-elements'


type Props = {}

const AvatarHead = ({ navigation }: any) => {
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