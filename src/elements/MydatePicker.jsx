import React from 'react'
import { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'

function MydatePicker() {
    const [rangeVal, setRangeVal] = useState(new DateObject());
    console.log(rangeVal);
    return (
        <>
            <DatePicker numberOfMonths={2} onChange={(e) => setRangeVal(e.value)} minDate={rangeVal} range rangeHover value={new DateObject()} />
        </>
    )
}

export default MydatePicker