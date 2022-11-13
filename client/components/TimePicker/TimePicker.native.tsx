import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements'
import { addEndTime, addDate, addStartTime, addDuration } from '../../redux/wudSlice';
import { useDispatch } from 'react-redux'

type Props = {}

export default function TimePicker({ }: Props) {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date(Date.now()));
  const [duration, setDuration] = useState()
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  // TODO: Same Redux dispatches for Web and Mobile. Standard Time Manipulation

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    dispatch(addDate(currentDate))
  
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleDuration = (duration: string) => {
    dispatch(addDuration(duration))
  }


  return (
    <View>
      <Card>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Text> Day: {date.toLocaleDateString()} </Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <TouchableOpacity onPress={() => showMode('time')}>
          <Text> Start: { date.toLocaleTimeString()}</Text>
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