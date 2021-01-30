import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [search_query, setSearch_query] = useState("");

  // add debouncing instead of enter
  useEffect(() => {
      console.log("Searched:" + search_query);
      props.searchRequest(search_query);
  }, [search_query]);

  return (
    <>
      <div className="data--search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch_query(search);
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="table-search form-control m-0 br-0"
            placeholder="Search.."
          />
        </form>
      </div>
    </>
  );
}
