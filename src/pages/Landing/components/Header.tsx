import Wrapper from './Wrapper';

import LogoImg from 'assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <div className='w-full h-20 border-b border-dark/6'>
      <Wrapper className='h-full flex justify-between items-center'>
        <img src={LogoImg} alt='logo' />
        <div className='flex items-center'>
          <select name='language' id='language' className='form-select'>
            <option value='en'>English</option>
          </select>
          <div className='pl-10 flex items-center'>
            <p className='font-bold'>Takeshi K.</p>
            <div className='mx-4 w-[1px] h-8 bg-dark/20'></div>
            <button>Log Out</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
