const Wrapper: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  return (
    <div className={`px-28 w-full mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
