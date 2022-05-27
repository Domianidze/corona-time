import { useState, useContext } from 'react';
import AuthContext from 'store/AuthContext';

import { useTranslation } from 'react-i18next';

import Wrapper from './Wrapper';
import Select from 'components/LangSelect';

import LogoImg from 'assets/img/logo.png';
import MenuImg from 'assets/img/icons/menu.png';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className='w-full h-20 border-b border-dark/6'>
        <Wrapper className='h-full flex justify-between items-center'>
          <img src={LogoImg} alt='logo' />
          <div className='flex items-center flex-shrink-0'>
            <Select className='w-20 md:w-auto' />
            <div className='hidden pl-10 items-center md:flex'>
              <p className='font-bold'>{authCtx.username}</p>
              <div className='mx-4 w-[1px] h-8 bg-dark/20'></div>
              <button onClick={authCtx.onLogout}>{t('logout')}</button>
            </div>
            <div className='mx-2 w-[1px] h-8 bg-dark/20 md:hidden'></div>
            <button
              type='button'
              className='pl-4 md:hidden'
              onClick={menuToggleHandler}
              id='menu-button'
            >
              <img src={MenuImg} alt='menu' />
            </button>
          </div>
        </Wrapper>
      </div>
      {menuOpen && (
        <div className='absolute block py-2 px-9 w-full bg-white text-center border-b border-dark/6 md:hidden'>
          <p className='font-bold'>{authCtx.username}</p>
          <div className='my-2 h-[1px] w-full bg-dark/20'></div>
          <button onClick={authCtx.onLogout} id='logout-button'>
            {t('logout')}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
