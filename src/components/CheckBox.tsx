const CheckBox: React.FC<{ label: string; id: string }> = (props) => {
  return (
    <div className='py-3 flex items-center'>
      <input
        type='checkbox'
        name={props.id}
        id={props.id}
        className='form-checkbox w-5 h-5 text-system/success border border-dark/20 rounded-[4px]'
      />
      <p className='pl-3  font-semibold text-sm'>{props.label}</p>
    </div>
  );
};

export default CheckBox;
