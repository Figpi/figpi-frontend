import React, { useState, useEffect } from "react";
import DataHeader from "./Dataheader";
import DataRow from "./Datarow";
import DatatableMenu from "./DatatableMenu";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import LoaderBs from "../../utils/LoaderBs";
import { BsThreeDots } from "react-icons/bs";

function Datatable(props) {
  // Fetch JSON data from Api
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      setData(data.splice(0, 100));
      setIsLoading(false);
    })();
  }, []);

  // Count columns
  let Count = Object.keys(props.data.results[0]);
  console.log(Count);

  // https://medium.com/@subalerts/create-dynamic-table-from-json-in-react-js-1a4a7b1146ef
  return (
    <>
      <div className="card mt-4 data--table">
        {/*CARD HEADER*/}

        <DatatableMenu count={props.data.count} />

        {/*CARD BODY */}
        <div className="card-body p-0">
          {/*Table section*/}
          <SearchBar />
          {isLoading ? (
            <LoaderBs />
          ) : (
            <div className="table-responsive">
              <table className="table table-hover border-top">
                <DataHeader values={Count} />
                <tbody>
                  <>
                    {props.data.results.map((item) => {
                      return (
                        <tr key={item.id}>
                          {Count.map((index) => {
                            return <td>{item[index]}</td>;
                          })}

                          <td className="comment">Comment</td>
                          <td className="actions">
                            <button className="btn btn-outline-theme btn-sm">
                              <BsThreeDots />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* CARD FOOTER */}
        <Pagination />
      </div>
    </>
  );
}
export default Datatable;
