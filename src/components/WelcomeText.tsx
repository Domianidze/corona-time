const WelcomeText: React.FC<{ main: string; secondary: string }> = (props) => {
  return (
    <div className='py-3'>
      <p className='py-1 text-2.5xl font-black'>{props.main}</p>
      <p className='py-1 text-xl text-dark/60'>{props.secondary}</p>
    </div>
  );
};

export default WelcomeText;
