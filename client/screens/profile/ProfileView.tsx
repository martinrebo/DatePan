import { View, Text, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect } from 'react'
import { auth } from '../../firebase'
import { Button, Image, Avatar } from 'react-native-elements'

type Props = {}

const ProfileView = ({ navigation }: any) => {
    // const navigation = useNavigation()
    const isFocused = useIsFocused()

    const handleEditProfile = () => {
        navigation.navigate('ProfileEdit')
    }
    const [name, setName] = React.useState(auth.currentUser?.displayName!)

    useEffect(() => {
        setName(auth.currentUser?.displayName!)

    }, [isFocused])

    const goHome = () => {
        navigation.navigate('Home')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL!,
                        }}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 10
                }}
                    onPress={goHome}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>ProfileView</Text>
            <Text> Name: {name}</Text>
            <Text> Email: {auth.currentUser?.email}</Text>
            <Text> photoURL: </Text>
            <Image source={{ uri: auth.currentUser?.photoURL! }} style={{ width: 200, height: 200 }} />
            <Button title="Edit Profile" onPress={handleEditProfile} />
        </View>
    )
}

export default ProfileView