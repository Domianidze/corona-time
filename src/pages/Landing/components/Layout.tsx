import Header from './Header';
import Wrapper from './Wrapper';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className=''>
      <Header />
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
};

export default Layout;
