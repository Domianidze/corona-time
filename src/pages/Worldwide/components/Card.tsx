const Card: React.FC<{
  title: string;
  amount: string;
  graph: string;
  color: string;
  className?: string;
}> = (props) => {
  return (
    <div
      className={`h-56 flex justify-center items-center flex-col rounded-2xl border-8 border-white md:1/3 md:h-64 lg:h-80 lg:w-[30%] ${props.className}`}
      style={{ backgroundColor: `${props.color}20` }}
    >
      <img src={props.graph} alt='graph' />
      <p className='py-3 px-1 text-lg font-medium md:text-xl max-w-full break-words text-center'>
        {props.title}
      </p>
      <p
        className={`text-3xl font-black md:text-4.2xl`}
        style={{ color: props.color }}
      >
        {props.amount}
      </p>
    </div>
  );
};

export default Card;
