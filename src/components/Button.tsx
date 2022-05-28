const Button: React.FC<{
  type: 'button' | 'submit' | 'reset';
  value: string;
  id?: string;
}> = (props) => {
  return (
    <button
      type={props.type}
      className='my-3 w-full h-14 text-white font-black uppercase bg-brand/secondary rounded-lg sm:w-96'
      id={props.id}
    >
      {props.value}
    </button>
  );
};

export default Button;
