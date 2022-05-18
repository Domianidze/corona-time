const Button: React.FC<{
  type: 'button' | 'submit' | 'reset';
  value: string;
}> = (props) => {
  return (
    <button
      type={props.type}
      className='my-3 w-96 h-14 text-white font-black uppercase bg-brand/secondary rounded-lg'
    >
      {props.value}
    </button>
  );
};

export default Button;
