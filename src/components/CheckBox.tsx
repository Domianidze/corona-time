import { UseFormRegisterReturn } from 'react-hook-form';

const CheckBox: React.FC<{
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
}> = (props) => {
  return (
    <div className='py-3 flex items-center'>
      <input
        type='checkbox'
        id={props.id}
        {...props.register}
        className='form-checkbox w-5 h-5 text-system/success border !border-dark/20 rounded-[4px]   !ring-0 !ring-white'
      />
      <p className='pl-3 font-semibold text-sm'>{props.label}</p>
    </div>
  );
};

export default CheckBox;
