import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements'
import { addDate, addStartTime, addDuration } from '../../redux/wudSlice';
import { useDispatch } from 'react-redux'

type Props = {}

export default function TimePicker({ }: Props) {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date(Date.now()))
  const [startTime, setStartTime] = useState(new Date(Date.now()))
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, currentDate: Date) => {
    setShow(false);
    if (mode === 'date') {
      setDate(currentDate)
      dispatch(addDate(currentDate))
     }

    if (mode === 'time') {
      setStartTime(currentDate)
      dispatch(addStartTime(currentDate))
    }
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleDuration = (duration: string) => {
    // TODO: Add measure hours / Day
    dispatch(addDuration(duration))
  }

  return (
    <View>
      <Card>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Text> Day: {date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} </Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <TouchableOpacity onPress={() => showMode('time')}>
          <Text> Start: { startTime.toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" }) }</Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <Input 
        placeholder='Duration Hours'
        keyboardType='numeric'
         onChangeText={(value: string) => handleDuration(value)}/>
      </Card>
{ show ? <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
      /> : null}
      
    </View>
  )
}