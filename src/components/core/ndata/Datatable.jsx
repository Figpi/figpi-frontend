import React from "react";
import { useState, useEffect, useCallback } from "react";
import { BsThreeDots } from "react-icons/bs";

// Sub-component imports
import Menu from "./Menu";
import Search from "./Search";
import Pagination from "./Pagination";

// Util-component imports
import LoaderBs from "../../utils/LoaderBs";

export default function Datatable(props) {
  const [results, setResults] = useState({});
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // VALUES LIST IDEA
  let itemList = [];
  itemList.push("Hej");
  itemList.push("Verden");
  // VALUES LIST END

  // Set headers for Request
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 37ba188c2184d0009fd814a17ec696c39de9644e"
  );
  // Set options for Request
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // INITIAL FETCH
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(props.api_endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => setResults(data));
        console.log({ results });
        setIsLoading(false);
      } catch (error) {}
    }

    fetchData();
  }, []);

  // CALLBACK FUNCTION FOR UPDATE
  const updateRequest = useCallback(() => {
    async function fetchData() {
      try {
        const response = await fetch(props.api_endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => setResults(data));
        console.log({ results });
      } catch (error) {}
    }

    fetchData();
  });

  // REQUEST TO API SEARCH ENDPOINT
  const searchRequest = useCallback((param) => {
    async function fetchData() {
      let search_endpoint = props.api_endpoint + "?search=" + param;
      try {
        const response = await fetch(search_endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => setResults(data));
      } catch (error) {}
    }

    fetchData();
  });

  // CALLBACK FUNCTION FOR UPDATE
  const prevRequest = useCallback((endpoint) => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => setResults(data));
      } catch (error) {}
    }

    fetchData();
  });

  // CALLBACK FUNCTION FOR UPDATE
  const nextRequest = useCallback((endpoint) => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => setResults(data));
      } catch (error) {}
    }

    fetchData();
  });

  // PROPS FOR MENU CHILD-COMPONENTS
  let menu_props = {
    menu_title: props.table_title,
    upload_ep: "http://127.0.0.1:8000/api/upload/",
    res: results,
    updateRequest,
  };

  // PROPS FOR SEARCH CHILD-COMPONENT
  let search_props = {
    search_ep: props.api_endpoint + "?search=",
    searchRequest,
  };

  // props for fetch previous
  let pagination_props = {
    prev: results.previous,
    next: results.next,
    prevRequest,
    nextRequest,
  };

  return (
    <div className="card mt-4 data--table">
      {/*CARD HEADER*/}
      <Menu {...menu_props} />

      {/*CARD BODY */}
      <div className="card-body p-0">
        {/*Table section*/}
        <Search {...search_props} />
        {isLoading ? <LoaderBs /> : <Table data={results} />}
      </div>
      {/* CARD FOOTER */}
      <div className="card-footer data--pagi">
        <Pagination {...pagination_props} />
      </div>
    </div>
  );
}

// Datatable Table Component
const Table = (props) => {
  console.log("From table: ");
  console.log("PROPS", props.data.results[0]);

  let key_count = 0;
  if (props.data.results[0] !== undefined) {
    key_count = Object.keys(props.data.results[0]);
  }
  console.log(key_count);

  return (
    <div className="table-responsive">
      <table className="table table-hover border-top">
        <thead className="py-4">
          <tr>
            {key_count.map((value, keys) => {
              return <th key={keys}>{value}</th>;
            })}

            <th className="comment">Comment</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.results.map((item) => {
            return (
              <tr key={item.id}>
                {key_count.map((index, keys) => {
                  return <td key={keys}>{item[index]}</td>;
                })}

                <td className="comment" contentEditable="true">
                  Comment
                </td>
                <td className="actions">
                  <button className="btn btn-outline-theme btn-sm">
                    <BsThreeDots />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
