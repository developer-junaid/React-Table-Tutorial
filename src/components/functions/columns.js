import { format } from "date-fns";
import { ColumnFilter } from "../FilteringTable/ColumnFilter";

// Columns
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    }, // Format Date
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
    Filter: ColumnFilter,
  },
];

// Groups
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
