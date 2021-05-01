### React Table Tutorial

## Steps

1. Create react app `npx creat-react-app app-name`
2. Navigate to react app and open it `cd app-name; code .;`
3. Install react table by running `npm i react-table`
4. Creating Basic Table: (steps)

- - Get **Data** you want to display
- - Define **columns**
- - Create **table instance** using data and columns defined
- - Define basic table structure using plain HTML
- - Use **table instance** created in **step 3** to bring life to HTML defined in **step 4**
- - Include **css**

5. Adding Footer: (steps)

- - add **'Footer'** property in **COLUMNS definition**
- - destructure **'footerGroups'** from **table instance**
- - add **footer html**
- - implement **footerGroup**s and bring footer UI to life
- - **Add Css**

6. Header Groups
7. Sorting
8. Global Filtering (steps)

- - Create Filter Input component
- - Accept filter and setFilter as props
- - import useGlobalFilter hook from react-table
- - set useGlobalFilter hook in table instance
- - destructure state and setGlobalFilter from table instance
- - destructure globalFilter from state
- - Add GlobalFilter Component on top of table inside a wrapper
- - set filter prop as globalFilter and setFilter prop as setGlobalFilter

9. Column Filtering (steps)

- - Create Filter Input component
- - Accept column as props (and destructure filterValue and setFilter)
- - import useFilters hooks from react-table
- - set useFilters hook in table instance
- - set Filters: ColumnFilter in the column definition of each column
- - conditionally render filter in th of column headers

10. Pagination (steps)

- - import usePagination from 'react-table'
- - destructure page from table instance
- - use page instead of rows in the body section

11. Selecting Rows
12. Column Hiding
13. Sticky Columns

- - install `npm i react-table-sticky`
- - install `npm i styled-components`
