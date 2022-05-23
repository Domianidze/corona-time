import { useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import SearchInput from './components/SearchInput';
import Table from './components/Table';

import { SortKeys } from './types/sort-types';

import { getTotals } from 'pages/Worldwide/helpers/helper-functions';

const ByCountry = () => {
  const [sortKey, setSortKey] = useState<SortKeys>('location');
  const [sortOrder, setSortOrder] = useState<'ascn' | 'desc'>('ascn');

  const sortHandler = (key: SortKeys) => {
    if (sortKey === key) {
      setSortOrder((prevState) => {
        return prevState === 'ascn' ? 'desc' : 'ascn';
      });
    } else {
      setSortKey(key);
    }
  };

  const countries: any[] = useOutletContext();
  const totals = getTotals(countries);

  const columns: { header: string; accessor: SortKeys }[] = [
    { header: 'Location', accessor: 'location' },
    { header: 'New Cases', accessor: 'newCases' },
    { header: 'Deaths', accessor: 'deaths' },
    { header: 'Recovered', accessor: 'recovered' },
  ];

  const formattedCountries = countries.map((country) => {
    return {
      location: country.name.en,
      newCases: country.statistics.confirmed,
      deaths: country.statistics.deaths,
      recovered: country.statistics.recovered,
    };
  });

  const filteredCountries = formattedCountries.sort((a, b) => {
    if (sortOrder === 'desc') {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
  });

  const data = [
    {
      location: 'Worldwide',
      newCases: totals.newCases,
      deaths: totals.death,
      recovered: totals.recovered,
    },
    ...filteredCountries,
  ];

  return (
    <div className='w-full'>
      <SearchInput id='table-search' placeholder='Search by country' />
      <Table
        columns={columns}
        data={data}
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSort={sortHandler}
      />
    </div>
  );
};

export default ByCountry;
