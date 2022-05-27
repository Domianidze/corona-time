const Button: React.FC<{
  type: 'button' | 'submit' | 'reset';
  value: string;
  id?: string;
}> = (props) => {
  return (
    <button
      type={props.type}
      className='my-3 w-96 h-14 text-white font-black uppercase bg-brand/secondary rounded-lg'
      id={props.id}
    >
      {props.value}
    </button>
  );
};

export default Button;
