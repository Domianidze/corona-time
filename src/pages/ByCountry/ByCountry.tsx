import { useOutletContext } from 'react-router-dom';

import SearchInput from './components/SearchInput';
import Table from './components/Table';

import { getTotals } from 'pages/Worldwide/helpers/helper-functions';

const ByCountry = () => {
  const countries: any[] = useOutletContext();
  const totals = getTotals(countries);

  const headers = [
    { title: 'Location' },
    { title: 'New Cases' },
    { title: 'Deaths' },
    { title: 'Recovered' },
  ];

  const formattedCountries = countries.map((country) => {
    return {
      location: country.name.en,
      newCases: country.statistics.confirmed,
      deaths: country.statistics.deaths,
      recovered: country.statistics.recovered,
    };
  });

  const body = [
    {
      location: 'Worldwide',
      newCases: totals.newCases,
      deaths: totals.death,
      recovered: totals.recovered,
    },
    ...formattedCountries,
  ];

  return (
    <div className='w-full'>
      <SearchInput id='table-search' placeholder='Search by country' />
      <Table headers={headers} body={body} />
    </div>
  );
};

export default ByCountry;
