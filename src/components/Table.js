import React, { useEffect } from "react";
import { useTable, usePagination, useFilters, useRowSelect } from "react-table";

export default function Table({ data, fetchData, columns, pageCount: controlledPageCount}) {
  const tableInstance = useTable({
                                    columns,
                                    data,
                                    initialState: { pageIndex: 0 },
                                    manualPagination: true,
                                    pageCount: controlledPageCount
                                  },
                                  useFilters,
                                  usePagination,
                                  useRowSelect
                                );

  const {
    canPreviousPage,
    canNextPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = tableInstance;

  useEffect(() => {
    console.log('se creo tabla nuevamente')
    fetchData(pageIndex);
  }, [pageIndex, fetchData]);

  return (
    <>
      {/* <TableContainer>  */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
     {/*  </TableContainer>  */}
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </>
  );
}
