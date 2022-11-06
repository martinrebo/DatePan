import { Platform } from 'react-native'
import React from 'react'
import TimePickerNative from './TimePickerNative'
import TimePickerWeb from './TimePickerWeb'
type Props = {}

const TimePicker = (props: Props) => {
    if (Platform.OS === 'android') return <TimePickerNative />
    if (Platform.OS === 'ios') return <TimePickerNative />
    if (Platform.OS === 'web') return <TimePickerWeb />
    return <></>
}

export default TimePicker