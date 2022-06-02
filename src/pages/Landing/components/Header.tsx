import React, { useState, useContext, useEffect } from 'react';

import { AuthContext } from 'state';

import { useTranslation } from 'react-i18next';

import Wrapper from './Wrapper';
import { LangSelect } from 'components';

import { LogoImg, MenuIcon } from 'assets';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuCloseHandler = (e: any) => {
      const path = e.path[0];
      const menu = path.closest('#menu');
      const menuButton = e.path[0].closest('button');

      if (menu || (menuButton && menuButton.id === 'menu-button')) return;
      setMenuOpen(false);
    };

    document.body.addEventListener('click', menuCloseHandler);
  }, []);

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
            <LangSelect />
            <div className='hidden pl-10 items-center md:flex'>
              <p className='font-bold'>{authCtx.username}</p>
              <div className='mx-4 w-[1px] h-8 bg-dark/20'></div>
              <button onClick={authCtx.onLogOut}>{t('logout')}</button>
            </div>
            <div className='mx-2 w-[1px] h-8 bg-dark/20 md:hidden'></div>
            <button
              type='button'
              className='pl-4 md:hidden'
              onClick={menuToggleHandler}
              id='menu-button'
            >
              <img src={MenuIcon} alt='menu' />
            </button>
          </div>
        </Wrapper>
      </div>
      {menuOpen && (
        <div
          className='absolute block py-2 px-9 w-full bg-white text-center border-b border-dark/20 shadow-sm md:hidden'
          id='menu'
        >
          <p className='font-bold'>{authCtx.username}</p>
          <div className='my-2 h-[1px] w-full bg-dark/20'></div>
          <button onClick={authCtx.onLogOut} id='logout-button'>
            {t('logout')}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
