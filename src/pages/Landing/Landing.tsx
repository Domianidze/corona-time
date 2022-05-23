import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import AuthContext from 'store/AuthContext';

import { Outlet, useLocation, NavLink } from 'react-router-dom';

import Layout from './components/Layout';
import Title from 'components/Title';

import { API_URL } from 'config/api';

const Landing = () => {
  const [countries, setCountries] = useState<any>([]);

  const authCtx = useContext(AuthContext);

  const location = useLocation();

  let title = 'Worldwide Statistcs';
  let activeClass = 'font-bold border-b-[3px] border-dark/100';

  if (location.pathname === '/landing/by-country') {
    title = 'Statistics by country';
  }

  useEffect(() => {
    if (!authCtx.token) return;

    const getCountries = async () => {
      try {
        const response = await axios.get(`${API_URL}/countries`, {
          headers: { Authorization: `Bearer ${authCtx.token}` },
        });

        setCountries(response?.data);
      } catch (err) {
        console.error(err);
      }
    };

    getCountries();
  }, [authCtx.token]);

  return (
    <Layout>
      <div className='mb-10 pb-3 border-b border-dark/6'>
        <Title value={title} className='py-10' />
        <ul>
          <NavLink
            to='/landing/worldwide'
            className={({ isActive }) => {
              return isActive ? `mr-16 pb-3 ${activeClass}` : 'mr-16';
            }}
          >
            Worldwide
          </NavLink>
          <NavLink
            to='/landing/by-country'
            className={({ isActive }) => {
              return isActive ? `pb-3 ${activeClass}` : 'pb-3';
            }}
          >
            By country
          </NavLink>
        </ul>
      </div>
      <Outlet context={countries} />
    </Layout>
  );
};

export default Landing;
