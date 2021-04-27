import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  // Debouncing
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  // Return
  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
