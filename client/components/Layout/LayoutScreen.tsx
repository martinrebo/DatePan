import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const LayoutScreen = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                {children}
            </View>

        </View>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    screen: {
        maxWidth: 500,
        textAlign: 'center',
    },
})