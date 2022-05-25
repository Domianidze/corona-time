import { useOutletContext } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Card from './components/Card';

import { getTotals } from 'helpers/helper-functions';

const Worldwide = () => {
  const { t } = useTranslation();

  const countries: any[] = useOutletContext();

  const totals = getTotals(countries);

  return (
    <div className='w-full flex justify-between flex-wrap md:flex-nowrap'>
      <Card
        type='newCases'
        title={t('newCases')}
        amount={totals.newCases}
        className='!w-full md:!w-96'
      />
      <Card type='recovered' title={t('recovered')} amount={totals.recovered} />
      <Card type='deaths' title={t('deaths')} amount={totals.deaths} />
    </div>
  );
};

export default Worldwide;
