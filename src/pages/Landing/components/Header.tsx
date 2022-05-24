import { useContext } from 'react';
import AuthContext from 'store/AuthContext';

import { useTranslation } from 'react-i18next';

import Wrapper from './Wrapper';
import Select from 'components/LangSelect';

import LogoImg from 'assets/img/logo.png';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  return (
    <div className='w-full h-20 border-b border-dark/6'>
      <Wrapper className='h-full flex justify-between items-center'>
        <img src={LogoImg} alt='logo' />
        <div className='flex items-center'>
          <Select />
          <div className='pl-10 flex items-center'>
            <p className='font-bold'>{authCtx.username}</p>
            <div className='mx-4 w-[1px] h-8 bg-dark/20'></div>
            <button onClick={authCtx.onLogout}>{t('logout')}</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
