import { SearchIcon } from 'assets/img/icons';

const SearchInput: React.FC<{
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: { target: HTMLInputElement }) => void;
}> = (props) => {
  return (
    <div className='relative w-full'>
      <img
        src={SearchIcon}
        alt='search'
        className='absolute top-1/2 left-6 -translate-y-1/2'
      />
      <input
        type='text'
        id={props.id}
        name={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className='form-input pl-16 w-full h-12 font-medium border !border-dark/20 rounded-lg md:w-60'
      />
    </div>
  );
};

export default SearchInput;
