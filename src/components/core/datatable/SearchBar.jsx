import React from "react";

function SearchBar() {
  return (
    <>
      <div className="data--search">
        <input
          type="text"
          className="table-search form-control m-0 br-0"
          placeholder="Search.."
        />
      </div>
    </>
  );
}

export default SearchBar;
