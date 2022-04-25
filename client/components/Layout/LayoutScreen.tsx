import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
}

const LayoutScreen = ({ children }: Props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.screen}>
                    {children}
                </View>

            </View>
        </SafeAreaView>
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
        padding: 5,
        backgroundColor: '#edf',
    },
})