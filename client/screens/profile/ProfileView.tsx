import { useIsFocused } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect } from 'react'
import { auth } from '../../firebase'
import { Button, Image, Card, Text, Icon, ListItem } from 'react-native-elements'
import LayoutScreen from '../../components/Layout/LayoutScreen'

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

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (

        <LayoutScreen>
            <Card>
                <ListItem>
                    <Icon name="user" type='evilicon' tvParallaxProperties={undefined} />
                    <ListItem.Content>
                        <Text>{name}</Text>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <Icon name="mail" tvParallaxProperties={undefined} />
                    <ListItem.Content>
                        <Text>{auth.currentUser?.email}</Text>
                    </ListItem.Content>
                </ListItem>
                <Image source={{ uri: auth.currentUser?.photoURL! }} style={{ width: 200, height: 200 }} />
                <Button
                    title="Edit Profile"
                    icon={{ name: 'edit' }}
                    type="outline"
                    onPress={handleEditProfile}
                />
            </Card>
            <Card>
                <Button
                    title="Logout"
                    icon={{ name: 'logout' }}
                    type="outline"
                    onPress={handleSignOut}
                />
            </Card>
        </LayoutScreen>
    )
}

export default ProfileView