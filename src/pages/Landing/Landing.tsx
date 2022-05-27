import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import AuthContext from 'state/AuthContext';

import { Outlet, useLocation, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Layout from './components/Layout';
import { Title } from 'components';

import { API_URL } from 'config/api';

const Landing = () => {
  const { t } = useTranslation();

  const [countries, setCountries] = useState<any>([]);

  const authCtx = useContext(AuthContext);

  const location = useLocation();

  let title = t('worldwideStatistics');
  let activeClass = 'font-bold border-b-[3px] border-dark/100';

  if (location.pathname === '/landing/by-country') {
    title = t('statisticsByCountry');
  }

  useEffect(() => {
    if (!authCtx.token) return;

    const getCountries = async () => {
      try {
        const response = await axios.get(`${API_URL}/countries`, {
          headers: { Authorization: `Bearer ${authCtx.token}` },
        });

        console.log(response.data);
        setCountries(response?.data);
      } catch (err) {
        console.error(err);
      }
    };

    getCountries();
  }, [authCtx.token]);

  return (
    <Layout>
      <div className='mb-5 pb-3 border-b border-dark/6 md:mb-10'>
        <Title value={title} className='py-5 md:py-10' />
        <ul>
          <NavLink
            to='/landing/worldwide'
            className={({ isActive }) => {
              return isActive ? `mr-16 pb-3 ${activeClass}` : 'mr-16';
            }}
          >
            {t('worldwide')}
          </NavLink>
          <NavLink
            to='/landing/by-country'
            className={({ isActive }) => {
              return isActive ? `pb-3 ${activeClass}` : 'pb-3';
            }}
            id='by-country-button'
          >
            {t('byCountry')}
          </NavLink>
        </ul>
      </div>
      <Outlet context={countries} />
    </Layout>
  );
};

export default Landing;
