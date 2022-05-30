import { useEffect, useState } from 'react';

import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import i18next from 'i18next';

const LangSelect: React.FC<{ className?: string }> = (props) => {
  const languages = [
    { id: 'en', name: 'English' },
    { id: 'ge', name: 'ქართული' },
  ];

  const lang = languages.find(
    (language) => language.id === i18next.resolvedLanguage
  );

  const [selected, setSelected] = useState<
    | {
        id: string;
        name: string;
      }
    | undefined
  >(lang);

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };

  useEffect(() => {
    if (selected) {
      i18next.changeLanguage(selected.id);
      localStorage.setItem('lang', selected.id);
    }
  }, [selected]);

  return (
    <div className={props.className} id='language'>
      <Listbox value={selected} onChange={setSelected}>
        {() => (
          <>
            <div className='mt-1 relative'>
              <Listbox.Button className='bg-white relative w-full rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 sm:text-sm'>
                <span className='block truncate'>{selected?.name}</span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <ChevronDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-dark/20' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={language}
                  >
                    <span>{language.name}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default LangSelect;
