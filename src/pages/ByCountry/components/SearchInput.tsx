import SearchImg from 'assets/img/icons/search.png';

const SearchInput: React.FC<{
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: { target: HTMLInputElement }) => void;
}> = (props) => {
  return (
    <div className='relative'>
      <img
        src={SearchImg}
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
        className='form-input pl-16 w-60 h-12 font-medium border !border-dark/20 rounded-lg'
      />
    </div>
  );
};

export default SearchInput;
