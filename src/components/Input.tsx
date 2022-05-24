import ErrorImg from 'assets/img/icons/error.png';
import SuccessImg from 'assets/img/icons/success.png';

const Input: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  id: string;
  register?: {};
  classname?: string;
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
    <div className={`py-3 flex flex-col ${props.classname}`}>
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
          } w-96 h-14 text-dark/100 border ${borderColor} rounded-lg focus:border-brand/primary`}
        />
        {success && (
          <img
            src={SuccessImg}
            alt='success'
            className='absolute top-1/2 right-6 -translate-y-1/2'
          />
        )}
      </div>
      {props.note && !props.error && (
        <p className='text-sm text-dark/60'>{props.note}</p>
      )}
      {props.error && (
        <div className='pt-1 flex items-center'>
          <img src={ErrorImg} alt='error' />
          <p className='pl-2 text-sm font-medium text-system/error whitespace-nowrap'>
            {props.error}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
