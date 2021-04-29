import React from "react";
import BasicTable from "./components/BasicTable/BasicTable";
import FilteringTable from "./components/FilteringTable/FilteringTable";
import PaginationTable from "./components/PaginationTable/PaginationTable";
import SortingTable from "./components/SortingTable/SortingTable";

const App = () => {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
};

export default App;
