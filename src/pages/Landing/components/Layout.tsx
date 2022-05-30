import { PropsWithChildren } from 'react';

import Header from './Header';
import Wrapper from './Wrapper';

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  return (
    <div>
      <Header />
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
};

export default Layout;
