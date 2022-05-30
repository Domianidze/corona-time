import { PropsWithChildren } from 'react';

const Wrapper: React.FC<PropsWithChildren<{ className?: string }>> = (
  props
) => {
  return (
    <div className={`px-3 w-full mx-auto ${props.className} 1/2xl:px-28`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
