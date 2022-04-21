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
import { Text } from 'react-native-elements';
import { addEndTime, addDate, addStartTime } from '../../redux/wudSlice';


export default function TimePickerWeb() {

  const [day, setDay] = React.useState<Date | null>(
    new Date(),
  );

  const handleDay = (newValue: Date | null) => {
    setDay(newValue);
    addDate(newValue);
  };

  const [start, setStart] = React.useState<Date | null>(
    new Date(),
  );

  const handleStart = (newValue: Date | null) => {
    setStart(newValue);
    addStartTime(newValue);
  };

  const [finish, setFinish] = React.useState<Date | null>(
    new Date(),
  );

  const handleFinish = (newValue: Date | null) => {
    setFinish(newValue);
    addEndTime(newValue);
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
          />

          <MobileTimePicker
            label="Finish"
            value={finish}
            onChange={handleFinish}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>


      </LocalizationProvider>
    </>
  );
}

type Props = {}