import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import COLUMNS from './columns';
import * as S from '../../components_Styled/FormElements';
import './table.css';
import { actionTo, DELET_EXPENSE } from '../../actions';

// https://www.youtube.com/watch?v=hson9BXU9F8 (ESTE COMPONENT É FRUTO DE UM DESAFIO EM APRENDER NOVAS FERRAMENTAS - AQUI ESTOU APRENDENDO COM REACT-TABLE E IMPLEMENTANDO COM A INSTRUÇÃO DO VIDEO)
const TableOfExpenses = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => expenses.map((each) => {
    const exchanges = each.exchangeRates[each.currency];
    return {
      ...each,
      name: exchanges.name?.split('/')[0],
      ask: Number(exchanges.ask).toFixed(2),
      value: Number(each.value).toFixed(2),
      convertedValue: (Number(each.value) * exchanges.ask)
        .toFixed(2),
      convertedFrom: 'Real',
      buttons:
  <>
    <S.EditBtn onClick="" data-testid="edit-btn" />
    <S.DeletBtn
      onClick={ () => dispatch(actionTo(DELET_EXPENSE, each.id)) }
      data-testid="delete-btn"
    />
  </>,

    };
  }),
  [expenses, dispatch]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table { ...getTableProps() }>
      <thead>
        {headerGroups.map((headerGroup, a) => (
          <tr key={ a } { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column, b) => (
              <th
                className="divTilte"
                key={ b }
                { ...column.getHeaderProps() }
              >
                {column.render('Header')}

              </th>
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
                  <td
                    className="divTilte"
                    key={ i2 }
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
