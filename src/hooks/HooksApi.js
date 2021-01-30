import React from "react";
import { useState, useEffect } from "react";

function useGetUcMasterSearch(query) {
  // Endpoint
  const endpoint = "http://127.0.0.1:8000/api/ucmaster/";
  const [results, setResults] = useState(0);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint, requestOptions);
        await setResults(response.json());
        console.log({ results });
      } catch (error) {}
    }

    fetchData();
  }, [query]);

  return [results];
}

export default useGetUcMasterSearch;
