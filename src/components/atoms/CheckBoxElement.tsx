import { forwardRef, InputHTMLAttributes } from 'react';
import Label from './Label';

interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  forwhat: string;
  labelMessage: string;
  checked?: boolean;
}

const CheckboxElement = forwardRef<HTMLInputElement, CheckboxElementProps>(({
  inputClass,
  forwhat,
  labelMessage,
  checked,
  ...props
}, ref) => {
  return (
    <div className={`flex items-center mb-4 ${inputClass}`}>
      <input
        type="checkbox"
        ref={ref}
        className="mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        checked={checked}
        {...props}
      />
      <Label className="text-gray-800 font-semibold" forwhat={forwhat} labelMessage={labelMessage} />
    </div>
  );
});

CheckboxElement.displayName = 'CheckboxElement';

export default CheckboxElement;
