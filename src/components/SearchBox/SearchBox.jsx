import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchbox}>
      <label className={styles.searchlabel}>Find contacts by name</label>
      <input value={filter} onChange={(e) => onFilterChange(e.target.value)} />
    </div>
  );
};

export default SearchBox;
