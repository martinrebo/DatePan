import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import { addEndTime, addDate, addStartTime } from '../../redux/wudSlice';
import { useDispatch } from 'react-redux'

type Props = {}

export default function TimePicker({ }: Props) {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date(Date.now()));
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

  return (
    <View>
      <Card>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Text> Select Day: {date.toLocaleDateString()} </Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <TouchableOpacity onPress={() => showMode('time')}>
          <Text> Select Start Hour: { date.toLocaleTimeString()}</Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <TouchableOpacity>
          <Text> TODO: EVENT DURATION </Text>
        </TouchableOpacity>
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