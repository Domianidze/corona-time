import React, { useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import SearchInput from './components/SearchInput';
import Table from './components/Table';

import { SortKeys } from './types/sort-types';

import { getTotals } from 'helpers/helper-functions';

const ByCountry = () => {
  const [sortKey, setSortKey] = useState<SortKeys>('location');
  const [sortOrder, setSortOrder] = useState<'ascn' | 'desc'>('ascn');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortHandler = (key: SortKeys) => {
    if (sortKey === key) {
      setSortOrder((prevState) => {
        return prevState === 'ascn' ? 'desc' : 'ascn';
      });
    } else {
      setSortKey(key);
    }
  };

  const searchHandler = (e: { target: HTMLInputElement }) => {
    setSearchQuery(e.target.value);
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

  let filteredCountries = formattedCountries.sort((a, b) => {
    if (sortOrder === 'desc') {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
  });

  if (searchQuery.length > 0) {
    filteredCountries = filteredCountries.filter((country) => {
      return country.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

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
      <SearchInput
        id='table-search'
        value={searchQuery}
        placeholder='Search by country'
        onChange={searchHandler}
      />
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
