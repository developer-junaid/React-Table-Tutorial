import { format } from "date-fns";
import { ColumnFilter } from "../FilteringTable/ColumnFilter";

// Columns
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
    sticky: "left",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
    sticky: "left",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    }, // Format Date
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Email",
    accessor: "email",
    Footer: "Email",
  },
  {
    Header: "Age",
    accessor: "age",
    Footer: "Age",
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
