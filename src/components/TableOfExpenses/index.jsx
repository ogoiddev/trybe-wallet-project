import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { useId } from 'react-id-generator';
import COLUMNS from './columns';
import './table.css';
import Buttons from './Buttons';

const TableOfExpenses = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const ids = useId(expenses.length + 1);

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
        {headerGroups.map((headerGroup, i) => (

          <span
            className="tr"
            key={ i }
            { ...headerGroup.getHeaderGroupProps() }
          >
            {headerGroup.headers.map((column, ii) => (
              <span
                className="divTilte th"
                key={ ii }
                { ...column.getHeaderProps() }
              >
                {column.render('Header')}
              </span>
            ))}
          </span>
        ))}
      </thead>

      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={ ids[i] } { ...row.getRowProps() }>
              {
                row.cells.map((cell, ii) => (
                  <td
                    className="divTilte"
                    key={ ii }
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
