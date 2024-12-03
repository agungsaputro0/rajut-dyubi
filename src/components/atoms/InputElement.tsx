import { forwardRef, InputHTMLAttributes } from 'react';
import Label from './Label';

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  forwhat: string;
  labelMessage: string;
  typeInput: string;
  inputName: string;
  inputPlaceholder: string;
}

// Use forwardRef to handle ref forwarding
const InputElement = forwardRef<HTMLInputElement, InputElementProps>(({
  inputClass,
  forwhat,
  labelMessage,
  typeInput,
  inputName,
  inputPlaceholder,
  ...props
}, ref) => {
  return (
    <div className={inputClass}>
      <Label className="text-gray-800 font-semibold" forwhat={forwhat} labelMessage={labelMessage} />
      <input
        name={inputName}
        id={inputName}
        type={typeInput}
        className="text-sm border-b-2 border-gray-500 w-full py-2 px-2 text-gray-800 placeholder:opacity-90 bg-transparent focus:border-gray-800 border-gray-300"
        placeholder={inputPlaceholder}
        ref={ref} 
        {...props} 
      />
    </div>
  );
});


InputElement.displayName = 'InputElement';

export default InputElement;
