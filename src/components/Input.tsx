const Input: React.FC<{
  label: string;
  type: string;
  id: string;
  placeholder: string;
  note?: string;
}> = (props) => {
  return (
    <div className='py-3 flex flex-col'>
      <label htmlFor={props.id} className='font-bold'>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className='form-input my-1 px-6 w-96 h-14 text-dark/100 border border-dark/20 outline-none rounded-lg'
      />
      {props.note && <p className='text-sm text-dark/60'>{props.note}</p>}
    </div>
  );
};

export default Input;
