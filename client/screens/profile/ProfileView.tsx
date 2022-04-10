import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { auth } from '../../firebase'
import { Button, Image } from 'react-native-elements'
import downloadImage from '../../helpers/downloadImage'

type Props = {}

const ProfileView = (props: Props) => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const handleEditProfile = () => {
        navigation.navigate('ProfileEdit')
    }
    const [name, setName] = React.useState(auth.currentUser?.displayName!)

    useEffect(() => {
        setName(auth.currentUser?.displayName!)

    }, [isFocused])
    return (
        <View>
            <Text>ProfileView</Text>
            <Text> Name: {name}</Text>
            <Text> Email: {auth.currentUser?.email}</Text>
            <Text> photoURL: </Text>
            <Image source={{ uri: auth.currentUser?.photoURL! }} style={{ width: 100, height: 100 }} />
            <Button title="Edit Profile" onPress={handleEditProfile} />
        </View>
    )
}

export default ProfileView