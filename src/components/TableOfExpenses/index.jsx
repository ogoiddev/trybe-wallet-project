import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import COLUMNS from './columns';
import './table.css';
import Buttons from './Buttons';

const TableOfExpenses = () => {
  const { expenses } = useSelector((state) => state.wallet);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => expenses.map((each) => {
    const exchanges = each.exchangeRates[each.currency];
    return {
      ...each,
      name: exchanges.name.split('/')[0],
      ask: Number(exchanges.ask).toFixed(2),
      value: Number(each.value).toFixed(2),
      convertedValue: (each.value * exchanges.ask)
        .toFixed(2),
      convertedFrom: 'Real',
      buttons: <Buttons id={ each.id } />,
    };
  }),
  [expenses]);

  const {
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table>
      <thead>
        {headerGroups.map((headerGroup) => (

          <span
            className="tr"
            key={ headerGroup.id }
            { ...headerGroup.getHeaderGroupProps() }
          >
            {headerGroup.headers.map((column) => (
              <span
                className="divTilte th"
                key={ columns.Header }
                { ...column.getHeaderProps() }
              >
                {column.render('Header')}
              </span>
            ))}
          </span>
        ))}
      </thead>

      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={ row } { ...row.getRowProps() }>
              {
                row.cells.map((cell, i2) => (
                  <td
                    className="divTilte"
                    key={ row.cells + i2 }
                    { ...cell.getCellProps() }
                  >
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
