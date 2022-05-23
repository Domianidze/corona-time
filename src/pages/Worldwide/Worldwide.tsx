import { useOutletContext } from 'react-router-dom';

import Card from './components/Card';

import { getTotals } from 'helpers/helper-functions';

const Worldwide = () => {
  const countries: any[] = useOutletContext();

  const totals = getTotals(countries);

  return (
    <div className='w-full flex justify-between'>
      <Card title='New Cases' amount={totals.newCases} />
      <Card title='Recovered' amount={totals.recovered} />
      <Card title='Death' amount={totals.death} />
    </div>
  );
};

export default Worldwide;
