import { Outlet, useLocation, NavLink } from 'react-router-dom';

import Layout from './components/Layout';
import Title from 'components/Title';

const Landing = () => {
  const location = useLocation();

  let title = 'Worldwide Statistcs';
  let activeClass = 'font-bold border-b-[3px] border-dark/100';

  if (location.pathname === '/landing/by-country') {
    title = 'Statistics by country';
  }

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
      <Outlet />
    </Layout>
  );
};

export default Landing;
