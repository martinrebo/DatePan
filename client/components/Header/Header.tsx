import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements'
import { auth } from '../../firebase'

type Props = {}

const Header = ({ navigation }: any) => {

    const goHome = () => {
        navigation.navigate('Home')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }} >
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL!,
                        }}
                        onPress={() => navigation.navigate('ProfileView')}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 10
                }}
                    onPress={goHome}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return (
        <></>
    )
}

export default Header

const styles = StyleSheet.create({})