import React, { useMemo } from "react";
import { useTable, useBlockLayout } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { COLUMNS } from "../functions/columns";
import { Styles } from "./TableStyles";
import "./basicTable.css";
import { useSticky } from "react-table-sticky";

export default function StickyTable() {
  // Memorize data once - data won't be recreated on every render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Create table instance
  const tableInstance = useTable(
    {
      columns, // Short Handed the columns:columns
      data, // Short Handed the data:data
    },
    useBlockLayout,
    useSticky
  );

  // Necessary Properties
  const { getTableProps, getTableBodyProps } = tableInstance; // Get Props
  const { headerGroups, rows, prepareRow, footerGroups } = tableInstance; // Get Methods

  const firstPageRows = rows.slice(0, 20);

  // Return
  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width: 1000, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
}
