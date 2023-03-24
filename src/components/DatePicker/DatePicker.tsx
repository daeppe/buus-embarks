import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

interface DatePickerProps {
    onSelectedDate: (selectedDate: Date | null) => void;
}

export default function DatePicker(props: DatePickerProps) {

    const handleDateChange = (date: Date | null) => {
        const setSelectedDate = date || new Date();
        props.onSelectedDate(setSelectedDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <StaticDateTimePicker
                orientation="landscape"
                onAccept={handleDateChange}
                ampm={false}
            />
        </LocalizationProvider>
    );
}