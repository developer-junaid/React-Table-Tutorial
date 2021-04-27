import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { COLUMNS } from "../functions/columns";
import "./filteringTable.css";
import { GlobalFilter } from "./GlobalFilter";

export default function FilteringTable() {
  // Memorize data once - data won't be recreated on every render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Create table instance
  const tableInstance = useTable(
    {
      columns, // Short Handed the columns:columns
      data, // Short Handed the data:data
    },
    useGlobalFilter
  );

  // Necessary Properties
  const { getTableProps, getTableBodyProps } = tableInstance; // Get Props
  const {
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  } = tableInstance; // Get Methods

  // Global Fitler
  const { globalFilter } = state;

  // Return
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            // prepare rows
            prepareRow(row);

            // Return
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}
