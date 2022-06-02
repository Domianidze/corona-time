import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorIcon, SuccessIcon } from 'assets';

const Input: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  id: string;
  register?: UseFormRegisterReturn;
  className?: string;
  note?: string;
  error?: string;
  isTouched?: boolean;
}> = (props) => {
  let borderColor = 'border-dark/20';
  const success = !props.error && props.isTouched;

  if (props.error) {
    borderColor = '!border-system/error';
  }

  if (success) {
    borderColor = '!border-system/success';
  }

  return (
    <div
      className={`py-3 pb-7 mb-1 relative w-full flex flex-col sm:w-96 ${props.className}`}
    >
      <label htmlFor={props.id} className='font-bold'>
        {props.label}
      </label>
      <div className='relative'>
        <input
          type={props.type}
          id={props.id}
          {...props.register}
          placeholder={props.placeholder}
          className={`form-input my-1 px-6 ${
            success && 'pr-14'
          } w-full h-14 text-dark/100 border ${borderColor} rounded-lg focus:border-brand/primary !ring-0`}
        />
        {success && (
          <img
            src={SuccessIcon}
            alt='success'
            className='absolute top-1/2 right-6 -translate-y-1/2'
          />
        )}
      </div>
      {props.note && !props.error && (
        <p className='absolute bottom-0.5 h-7 text-sm text-dark/60'>
          {props.note}
        </p>
      )}
      {props.error && (
        <div className='pt-1 absolute -bottom-0.5 h-7 flex items-center'>
          <img src={ErrorIcon} alt='error' />
          <p className='pl-2 text-sm font-medium text-system/error'>
            {props.error}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
