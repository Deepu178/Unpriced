import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import Button from '../Button';
import './index.scss';

const Searchbar = ({ onSubmit, placeholder, className, button = '' }) => {
  const [value, setValue] = useState('');
  const classes = `search-bar ${className}`;

  const changeHandler = (e) => {
    const searchValue = e.target.value.trimStart();
    setValue(searchValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={classes} autoComplete="off" onSubmit={submitHandler}>
      <div className="search-bar__container">
        {<IoMdSearch />}
        <input type="search" name="search-bar" value={value} onChange={changeHandler} className="search-bar__input" placeholder={placeholder} />
      </div>
      <Button type="submit" size="large">
        {button}
      </Button>
    </form>
  );
};

export default Searchbar;
