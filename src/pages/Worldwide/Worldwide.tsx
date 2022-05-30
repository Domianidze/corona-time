import { useOutletContext } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Card } from './components';

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
        type='newCases'
        title={t('newCases')}
        amount={newCases}
        className='w-full md:w-1/2'
      />
      <Card
        type='recovered'
        title={t('recovered')}
        amount={recovered}
        className='w-1/2'
      />
      <Card
        type='deaths'
        title={t('deaths')}
        amount={deaths}
        className='w-1/2'
      />
    </div>
  );
};

export default Worldwide;
