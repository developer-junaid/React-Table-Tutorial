import React from "react";
import BasicTable from "./components/BasicTable/BasicTable";
import FilteringTable from "./components/FilteringTable/FilteringTable";
import PaginationTable from "./components/PaginationTable/PaginationTable";
import SortingTable from "./components/SortingTable/SortingTable";
import "./app.css";
import RowSelection from "./components/RowSelection/RowSelection";
import ColumnHiding from "./components/ColumnHiding/ColumnHiding";
import ColumnOrder from "./components/ColumnOrder/ColumnOrder";

const App = () => {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      <ColumnHiding />
    </div>
  );
};

export default App;
