import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./../data/MOCK_DATA.json";
import { COLUMNS } from "./functions/columns";

export default function BasicTable() {
  // Memorize data once - data won't be recreated on every render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Create table instance
  const tableInstance = useTable({
    columns, // Short Handed the columns:columns
    data, // Short Handed the data:data
  });

  // Return
  return <h1>Table</h1>;
}
