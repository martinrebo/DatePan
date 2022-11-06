import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
}

const LayoutScreen = ({ children }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>      
                <View>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: '#edf',
    },
})