import SearchInput from './components/SearchInput';
import Table from './components/Table';

const ByCountry = () => {
  const DUMMY_HEADERS = [
    { title: 'Location' },
    { title: 'New Cases' },
    { title: 'Deaths' },
    { title: 'Recovered' },
  ];

  const DUMMY_BODY = [
    {
      location: 'Worldwide',
      newCases: '9,704,000',
      deaths: '66,591',
      recovered: '5,803,905',
    },
    {
      location: 'Albania',
      newCases: '6,704,000',
      deaths: '33,591',
      recovered: '1,803,905',
    },
    {
      location: 'Algeria',
      newCases: '3,704,000',
      deaths: '11,591',
      recovered: '803,905',
    },
    {
      location: 'Andora',
      newCases: '9,704,000',
      deaths: '66,591',
      recovered: '5,803,905',
    },
    {
      location: 'Albania',
      newCases: '6,704,000',
      deaths: '33,591',
      recovered: '1,803,905',
    },
    {
      location: 'Algeria',
      newCases: '3,704,000',
      deaths: '11,591',
      recovered: '803,905',
    },
    {
      location: 'Andora',
      newCases: '9,704,000',
      deaths: '66,591',
      recovered: '5,803,905',
    },
    {
      location: 'Albania',
      newCases: '6,704,000',
      deaths: '33,591',
      recovered: '1,803,905',
    },
    {
      location: 'Algeria',
      newCases: '3,704,000',
      deaths: '11,591',
      recovered: '803,905',
    },
    {
      location: 'Andora',
      newCases: '9,704,000',
      deaths: '66,591',
      recovered: '5,803,905',
    },
    {
      location: 'Albania',
      newCases: '6,704,000',
      deaths: '33,591',
      recovered: '1,803,905',
    },
    {
      location: 'Algeria',
      newCases: '3,704,000',
      deaths: '11,591',
      recovered: '803,905',
    },
  ];

  return (
    <div className='w-full'>
      <SearchInput id='table-search' placeholder='Search by country' />
      <Table headers={DUMMY_HEADERS} body={DUMMY_BODY} />
    </div>
  );
};

export default ByCountry;
