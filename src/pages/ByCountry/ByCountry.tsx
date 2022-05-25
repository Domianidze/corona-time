import { useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import SearchInput from './components/SearchInput';
import Table from './components/Table';

import { SortKeys } from './types/sort-types';

import { getTotals } from 'helpers/helper-functions';

const ByCountry = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

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
    { header: t('location'), accessor: 'location' },
    { header: t('newCases'), accessor: 'newCases' },
    { header: t('deaths'), accessor: 'deaths' },
    { header: t('recovered'), accessor: 'recovered' },
  ];

  const formattedCountries = countries.map((country) => {
    return {
      location: lang === 'ge' ? country.name.ka : country.name.en,
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
      location: t('worldwide'),
      newCases: totals.newCases,
      deaths: totals.deaths,
      recovered: totals.recovered,
    },
    ...filteredCountries,
  ];

  return (
    <div className='w-full'>
      <SearchInput
        id='table-search'
        value={searchQuery}
        placeholder={t('searchByCountry')}
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
