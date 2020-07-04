import React from "react";
import './SearchBox.style.css'
function SearchBox({ placeholder, handlechange }) {
  return (
      <input className="search" type="search" placeholder={placeholder} onChange={handlechange} />
  );
}

export default SearchBox;