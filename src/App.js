import React from "react";
import BasicTable from "./components/BasicTable/BasicTable";
import FilteringTable from "./components/FilteringTable/FilteringTable";
import SortingTable from "./components/SortingTable/SortingTable";

const App = () => {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
    </div>
  );
};

export default App;
