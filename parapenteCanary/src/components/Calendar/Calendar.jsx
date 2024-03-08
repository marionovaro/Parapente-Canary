import { useState } from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "react-rainbow-components"


export const CalendarPicker = () => {
  const [date, setDate] = useState(null);
  const { register } = useForm()


  const onChangeDate = (date) => {
    setDate(date)
  }

  return (
    <div className="input-container date-picker">
      Fecha (48h antelación)
      {/* <input
        type="date"            
        { ...register("date", {required: true})}
      /> */}
      <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
          <DatePicker
            id="datePicker-1"
            value={date}
            onChange={onChangeDate}
            formatStyle="large"
            { ...register("date", {required: true})}
          />
      </div>
    </div>
  )
}