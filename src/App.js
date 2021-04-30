import React from "react";
import BasicTable from "./components/BasicTable/BasicTable";
import FilteringTable from "./components/FilteringTable/FilteringTable";
import PaginationTable from "./components/PaginationTable/PaginationTable";
import SortingTable from "./components/SortingTable/SortingTable";
import "./app.css";
import RowSelection from "./components/RowSelection/RowSelection";
import ColumnOrder from "./components/ColumnOrder/ColumnOrder";

const App = () => {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      <ColumnOrder />
    </div>
  );
};

export default App;
