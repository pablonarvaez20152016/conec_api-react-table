import React,{ useCallback, useMemo, useState } from "react";
import Table from "./Table";
import  FetchUsers, { getInconsistenciasPlanosPaginados } from "./FetchUsers";

export const Appp = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = useCallback(async function (page) {
    setLoading(true);
    /* const json = await getInconsistenciasPlanosPaginados(8700,'2022-09-14 01:22:49.684642',page + 1); */
    const json = await FetchUsers(page + 1);
    setUsers(json.list);
    setPageCount(json.apiPagination.totalPages);
    setLoading(false);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre campo",
        accessor: "nombre_campo_error"
        },
        {
        Header: "Tipo error",
        accessor: "tipo_error"
        },
        {
        Header: "Descripción error",
        accessor: "descripcion_error"
        },
    ],
    []
  );

  return (
    <div className="App">

      <Table
        columns={columns}
        data={users}
        fetchData={fetchData}
        pageCount={pageCount}
      />
      {isLoading && <div>Cargando...</div>}
    </div>
  )}