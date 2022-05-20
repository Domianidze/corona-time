import Card from './components/Card';

const Worldwide = () => {
  return (
    <div className='w-full flex justify-between'>
      <Card title='New Cases' amount='715,523' />
      <Card title='Recovered' amount='72,005' />
      <Card title='Death' amount='8,332' />
    </div>
  );
};

export default Worldwide;
