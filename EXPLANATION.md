# Code Explanation

**NOTE:** A third-party library [Ag-Grid](https://ag-grid.com/) was used at the core to implement most of the required features.
I've decided to do this, because:
- it provides a stable, tested, well-documented and maintained base functionality
- it is IMHO a more realistic and budget-friendly solution - **you don't reinvent the wheel everytime**
- and the requirements did not disallow it.

## Requirement: The table should be created using Angular components and directives.

The main component for the data table can be found in [data-table.component.ts](src/app/components/data-table/data-table.component.ts).

## Requirement: The table receives the columns and the data as Input.

In the DataTable component:
- the 'data' input property will accept any array data
- the 'columns' input property will accept a custom column configuration

## Requirement: The table should fetch data from an API and display it in the table.

See [api.service.ts](src/app/services/api.service.ts) for a basic API helper service and...
- [users.service.ts](src/app/services/users.service.ts) for fetching mockup users data
- [products.service.ts](src/app/services/products.service.ts) for fetching mockup products data

The API urls used for these services can be configured in [config.ts](src/app/config/config.ts).

NOTE: As this is a mockup solution, the application uses no POST/PUT/PATCH methods for any API. In a real-world scenario, these methods would necessarily be implemented, as well.

## Requirement: The table should support sorting by clicking on column headers.

Solved by using the sorting methods provided by Ag-Grid. Clicking on the column headers will cycle through different sorting directions, and eventually turn off the sorting.
A custom sorting handler will turn off row dragging while any sorting is active.

NOTE: For this mockup application, I disabled sorting on some columns (e.g. the images). In a real-world scenario, there will be decisions necessary on which columns will allow sorting, as well.

## Requirement: The table should support filtering by a search term entered by the user.

Solved by using the filtering methods provided by Ag-Grid. Using the hamburger menu on a column header will allow for extensive filtering options.
A custom filtering handler will turn off row dragging while any filters are active.

NOTE: For this mockup application, I disabled filtering on some columns (e.g. the images). In a real-world scenario, there will be decisions necessary on which columns will allow filtering, as well.

## Requirement: The table should support pagination to display a limited number of rows at a time.

Solved by using the pagination features provided by Ag-Grid.
I chose to use a dynamic pagination setting, which will instruct the table to display as many rows as possible in the viewport.

## Requirement: The table should allow users to edit and update data directly from the table.

Most of the table data is editable by double-clicking the text.

NOTE: In this mockup application, no edited data will be saved and will be reverted by reloading the application or changing the route.

## Requirement: The table should be configurable to work with different datasets and column configurations.

Each table and its displayed columns can be configured in [config.ts](src/app/config/config.ts).

NOTE: The requirement did not state that **the user** must be able to configure this, so the configuration is found in the source code.

## Nice to have: The table should support drag and drop to reorder rows.

Solved by using the row dragging features provided by Ag-Grid.

NOTE: Row dragging is disabled while any filtering or sorting is active. Dragging rows across pages is not possible and is considered a complicated task when using pagination. In a real-world scenario, this interaction must be designed very thoroughly.

## Nice to have: The table should allow users to reorder and resize columns.

Solved by using the column reorder and resizing features provided by Ag-Grid. Click and drag a column header to reorder it. Click and drag between column headers to resize them.
Some columns are configured to be fixed, like in a real-world scenario.