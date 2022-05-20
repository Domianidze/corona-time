const Title: React.FC<{ value: string; className?: string }> = (props) => {
  return (
    <p className={`text-2.1xl font-black ${props.className}`}>{props.value}</p>
  );
};

export default Title;
