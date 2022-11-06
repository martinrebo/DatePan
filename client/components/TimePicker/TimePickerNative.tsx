import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Button, Platform, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

type Props = {}

export default function TimePicker({ }: Props) {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  console.log('DateTimePicker NAtive')

  return (
    <View>
      <Text>selected: {date.toLocaleString()}</Text>

      <Card>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Text> Select Day: </Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <TouchableOpacity onPress={() => showMode('time')}>
          <Text> Select Start Hour: dddd</Text>
        </TouchableOpacity>
      </Card>

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
      />
    </View>
  )
}