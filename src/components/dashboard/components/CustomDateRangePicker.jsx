import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';

export default function CustomDateRangePicker({
  initialValue = [dayjs('2022-04-17T15:30'), dayjs('2022-04-21T18:30')],
  label = 'Event Date',
  onDateChange,
}) {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onDateChange) {
      onDateChange(newValue); 
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimeRangePicker', 'DateTimeRangePicker']}>
        <DemoItem label={label} component="DateTimeRangePicker">
          <DateTimeRangePicker
            value={value}
            onChange={handleChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
