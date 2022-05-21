import ArrowsImg from 'assets/img/arrows/arrow.png';
// import ArrowsTopImg from 'assets/img/arrows/arrow-top.png';
// import ArrowsBottomImg from 'assets/img/arrows/arrow-bottom.png';

const Table: React.FC<{
  headers: { title: string }[];
  body: {
    location: string;
    newCases: string;
    deaths: string;
    recovered: string;
  }[];
}> = (props) => {
  return (
    <div className='my-10 w-full h-150 border border-dark/4 rounded-lg shadow-sm overflow-hidden'>
      <table className='w-full h-full'>
        <thead className='h-14 bg-dark/4'>
          <tr className='table w-200 h-full'>
            {props.headers.map((header) => {
              return (
                <th className='px-8 w-48'>
                  <p className='flex items-center text-sm font-semibold pr-3'>
                    {header.title}{' '}
                    <img src={ArrowsImg} alt='arrow' className='pl-2' />
                  </p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className='block h-full overflow-y-auto'>
          {props.body.map((body) => {
            return (
              <>
                <tr className='table w-200 h-14 align-middle'>
                  {Object.values(body).map((value) => {
                    return <td className='px-8 w-48'>{value}</td>;
                  })}
                </tr>
                <tr className='block w-full h-[1px] bg-dark/4'></tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
