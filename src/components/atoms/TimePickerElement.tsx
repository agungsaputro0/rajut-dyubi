import { forwardRef } from 'react';
import { TimePicker } from 'antd';
import { Dayjs } from 'dayjs'; // Pastikan dayjs diimpor
import Label from './Label';

interface TimePickerElementProps {
  inputClass?: string;
  forwhat: string;
  labelMessage: string;
  inputName: string;
  inputPlaceholder: string;
  onChange?: (value: string | null) => void;
  size?: 'small' | 'middle' | 'large';
  value?: Dayjs | null;
}

const TimePickerElement = forwardRef<any, TimePickerElementProps>(({
  inputClass,
  forwhat,
  labelMessage,
  inputName,
  inputPlaceholder,
  onChange,
  size = 'middle',
  value = null,
  ...props
}, ref) => {
  return (
    <div className={inputClass}>
      <Label className="text-gray-800 font-semibold" forwhat={forwhat} labelMessage={labelMessage} />
      <TimePicker
        name={inputName}
        id={inputName}
        className="text-sm border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-500 w-full py-2 px-2 text-gray-800 placeholder:opacity-90 bg-transparent border-gray-300"
        format="HH:mm"
        placeholder={inputPlaceholder}
        ref={ref}
        onChange={(time: Dayjs | null) => {
          // Format waktu menggunakan dayjs
          const formattedTime = time ? time.format('HH:mm') : null;
          onChange?.(formattedTime); // Pastikan onChange dipanggil dengan formatted time
        }}
        size={size}
        value={value} // Pastikan value sesuai dengan tipe Dayjs
        {...props}
      />
    </div>
  );
});

TimePickerElement.displayName = 'TimePickerElement';

export default TimePickerElement;
