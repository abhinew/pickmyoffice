import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function DateContainer() {
    console.log("sss")
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);

    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
};

export default DateContainer;