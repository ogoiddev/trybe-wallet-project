import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import COLUMNS from './columns';

const TableOfExpenses = () => {
  const selectorTo = useSelector((state) => state.wallet.expenses);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => selectorTo, [selectorTo]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table { ...getTableProps() }>
      <thead>
        {headerGroups.map((headerGroup, a) => (
          <tr key={ a } { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column, b) => (
              <th key={ b } { ...column.getHeaderProps() }>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody { ...getTableBodyProps() }>
        {rows.map((row, i1) => {
          prepareRow(row);
          return (
            <tr key={ i1 } { ...row.getRowProps() }>
              {
                row.cells.map((cell, i2) => (
                  <td key={ i2 } { ...cell.getCellProps() }>
                    {cell.render('Cell')}
                  </td>))
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableOfExpenses;
