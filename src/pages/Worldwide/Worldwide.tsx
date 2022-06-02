import { useOutletContext } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Card } from './components';

import { NewCasesIcon, RecoveredIcon, DeathsIcon } from 'assets';

const Worldwide = () => {
  const { t } = useTranslation();

  const countries: any[] = useOutletContext();

  const newCases = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.confirmed;
    }, 0)
    .toLocaleString();

  const recovered = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.recovered;
    }, 0)
    .toLocaleString();

  const deaths = countries
    .reduce((prev, cur) => {
      return prev + cur.statistics.deaths;
    }, 0)
    .toLocaleString();

  return (
    <div className='w-full flex justify-between flex-wrap md:flex-nowrap'>
      <Card
        title={t('newCases')}
        amount={newCases}
        graph={NewCasesIcon}
        color='#2029F3'
        className='w-full md:w-1/2'
      />
      <Card
        title={t('recovered')}
        amount={recovered}
        graph={RecoveredIcon}
        color='#0FBA68'
        className='w-1/2'
      />
      <Card
        title={t('deaths')}
        amount={deaths}
        graph={DeathsIcon}
        color='#EAD621'
        className='w-1/2'
      />
    </div>
  );
};

export default Worldwide;
