import React,{ useCallback, useMemo, useState } from "react";
import Table from "./Table";
import FetchUsers from "./FetchUsers";

export const Appp = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = useCallback(async function (page) {
    setLoading(true);
    const json = await FetchUsers(page + 1);
    setUsers(json.data);
    setPageCount(json.total_pages);
    setLoading(false);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Id cambiado",
        accessor: "id"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "First Name",
        accessor: "first_name"
      }
    ],
    []
  );

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="heart">
          💛
        </span>{" "}
        cambios
      </h1>
      <Table
        columns={columns}
        data={users}
        fetchData={fetchData}
        pageCount={pageCount}
      />
      {isLoading && <div>Cargando...</div>}
    </div>
  );
}