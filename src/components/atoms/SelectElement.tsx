import { forwardRef, SelectHTMLAttributes } from 'react';
import Label from './Label';

interface SelectElementProps extends SelectHTMLAttributes<HTMLSelectElement> {
  inputClass?: string;
  forwhat: string;
  labelMessage: string;
  options: { value: string; label: string }[];
}

const SelectElement = forwardRef<HTMLSelectElement, SelectElementProps>(({
  inputClass,
  forwhat,
  labelMessage,
  options,
  ...props
}, ref) => {
  return (
    <div className={inputClass}>
      <Label className="text-gray-800 font-semibold" forwhat={forwhat} labelMessage={labelMessage} />
      <select
       className="text-sm border-b-2 border-gray-500 w-full py-2 px-2 text-gray-800 placeholder:opacity-90 bg-transparent focus:border-gray-800 border-gray-300"
        ref={ref}
        {...props}
      >
        {options.map(option => (
          <option className="text-black" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

SelectElement.displayName = 'SelectElement';

export default SelectElement;
