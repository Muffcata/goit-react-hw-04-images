import { React } from 'react';
import style from './SearchBar.module.css';

export const SearchBar = props => {
  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={props.onSubmit}>
        <button type="submit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>

        <input
          className={style.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
