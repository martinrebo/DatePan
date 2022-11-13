import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
    type?: 'virtuallList'
}

const LayoutScreen = ({ children }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll} keyboardShouldPersistTaps={'handled'}>      
                <View>
                    <>{children}</>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scroll: {
        backgroundColor: process.env.BRAND === 'CBI' ? 'transparent' : '#edf',
        textAlign: 'center',
        maxWidth: 500
    },
})