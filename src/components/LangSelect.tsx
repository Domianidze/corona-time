import i18next from 'i18next';

const LangSelect: React.FC<{ className?: string }> = (props) => {
  const lang = i18next.language;

  const langChangeHandler = (e: { target: HTMLSelectElement }) => {
    i18next.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  return (
    <select
      name='language'
      id='language'
      defaultValue={lang}
      className={`form-select ${props.className}`}
      onChange={langChangeHandler}
    >
      <option value='en'>English</option>
      <option value='ge'>ქართული</option>
    </select>
  );
};

export default LangSelect;
