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
    <div className='mt-5 w-full h-[calc(100vh-19rem)] border border-dark/4 rounded-lg shadow-sm md:my-10 md:h-[calc(100vh-26rem)] overflow-hidden'>
      <table className='w-full h-full'>
        <thead className='h-14 bg-dark/4'>
          <tr className='w-full h-full flex items-center sm:pr-3 xl:pr-0 xl:w-310'>
            {props.columns.map((header) => {
              return (
                <th
                  className='px-2 w-1/4 flexz sm:px-8'
                  onClick={props.onSort.bind(null, header.accessor)}
                  key={header.header}
                >
                  <div className='w-full flex flex-col justify-center items-center text-center cursor-pointer sm:flex-row sm:justify-start sm:text-left'>
                    <p className='text-xxs break-words font-semibold sm:text-xs md:text-sm max-w-full'>
                      {header.header}
                    </p>
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
                        className='pl-1 sm:pl-2'
                      />
                    ) : (
                      <img
                        src={ArrowsImg}
                        alt='arrows'
                        className='pl-1 sm:pl-2'
                      />
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className='block h-full overflow-y-scroll'>
          {props.data.map((country) => {
            return (
              <React.Fragment key={country.location}>
                <tr className='w-full h-14 flex items-center xl:w-310'>
                  {Object.entries(country).map((value) => {
                    return (
                      <td
                        className='px-2 w-1/4 text-xxs text-center sm:px-8 sm:text-xs md:text-sm sm:text-left'
                        key={value[0]}
                      >
                        <p className='max-w-full break-words'>{value[1]}</p>
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
