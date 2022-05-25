import React from 'react';

import ArrowsImg from 'assets/img/arrows/arrow.png';
import ArrowsTopImg from 'assets/img/arrows/arrow-top.png';
import ArrowsBottomImg from 'assets/img/arrows/arrow-bottom.png';

import { SortKeys } from '../types/sort-types';

const Table: React.FC<{
  columns: { header: string; accessor: SortKeys }[];
  data: {
    location: string;
    newCases: string;
    deaths: string;
    recovered: string;
  }[];
  sortKey: SortKeys;
  sortOrder: 'ascn' | 'desc';
  onSort: (key: SortKeys) => void;
}> = (props) => {
  return (
    <div className='mt-5 w-full h-[calc(100vh-19rem)] border border-dark/4 rounded-lg shadow-sm overflow-x-auto md:my-10 md:h-[calc(100vh-26rem)]'>
      <table className='w-full h-full'>
        <thead className='h-14 bg-dark/4'>
          <tr className='w-200 h-full flex'>
            {props.columns.map((header) => {
              return (
                <th
                  className='px-8 w-48 flex'
                  onClick={props.onSort.bind(null, header.accessor)}
                  key={header.header}
                >
                  <p className='flex items-center text-sm font-semibold text-left cursor-pointer'>
                    {header.header}{' '}
                    {header.accessor === props.sortKey ? (
                      <img
                        src={
                          props.sortOrder === 'ascn'
                            ? ArrowsTopImg
                            : ArrowsBottomImg
                        }
                        alt={
                          props.sortOrder === 'ascn'
                            ? 'arrows-top'
                            : 'arrows-bottom'
                        }
                        className='pl-2'
                      />
                    ) : (
                      <img src={ArrowsImg} alt='arrows' className='pl-2' />
                    )}
                  </p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className='block h-full overflow-y-auto'>
          {props.data.map((country) => {
            return (
              <React.Fragment key={country.location}>
                <tr className='w-200 h-14 align-middle'>
                  {Object.entries(country).map((value) => {
                    return (
                      <td className='px-8 w-48 h-full' key={value[0]}>
                        {value[1]}
                      </td>
                    );
                  })}
                </tr>
                <tr className='block w-full h-[1px] bg-dark/4'></tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
