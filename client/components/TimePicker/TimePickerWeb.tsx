import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateTimePicker from '@mui/lab/DateTimePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { Button, Text} from 'react-native-elements';
import { Platform } from 'react-native'
import { addEndTime, addDate, addStartTime } from '../../redux/wudSlice';
import { useDispatch } from 'react-redux'


export default function TimePickerWeb() {
  console.log('This shouldnt be on Native console')
  if (Platform.OS === 'android') return <></>
  const dispatch = useDispatch()

  const [day, setDay] = React.useState<Date | null>(
    new Date(),
  );

  const handleDay = (newValue: Date | null) => {
    setDay(newValue);
    dispatch(addDate(newValue))

  };

  const [start, setStart] = React.useState<Date | null>(
    new Date(),
  );

  const handleStart = (newValue: Date | null) => {
    setStart(newValue);
    dispatch(addStartTime(newValue));
  };

  const [finish, setFinish] = React.useState<Date | null>(
    new Date(),
  );

  const handleFinish = (newValue: Date | null) => {
    setFinish(newValue);
    dispatch(addEndTime(newValue));
  };



  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <MobileDatePicker

            label="Day"
            inputFormat="dddd, DD-MM-YYYY"
            value={day}
            onChange={handleDay}
            renderInput={(params) => <TextField {...params} />}
          />

          <MobileTimePicker
            label="Start"
            value={start}
            onChange={handleStart}
            renderInput={(params) => <TextField {...params} />}
            onAccept={() => addStartTime(start)}
          />

          <MobileTimePicker
            label="Finish"
            value={finish}
            onChange={handleFinish}
            renderInput={(params) => <TextField {...params} />}
            onAccept={() => addEndTime(finish)}
          />
        </Stack>

      </LocalizationProvider>
    </>
  );
}
