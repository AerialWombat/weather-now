import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ searchChange, searchSubmit }) => {
  return (
    <form className={styles.searchBar} onSubmit={searchSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder="Location"
        onChange={searchChange}
      />
      <input className={styles.submit} type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;

//
