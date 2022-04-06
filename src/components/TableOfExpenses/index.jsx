import { useSelector } from 'react-redux';
import { useId } from 'react-id-generator';
import './table.css';
import React from 'react';
import Buttons from './Buttons';

const TableOfExpenses = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const ids = useId(expenses.length + 1);

  const columns = {
    description: 'Descrição',
    tag: 'Tag',
    method: 'Método de pagamento',
    value: 'Valor',
    name: 'Moeda',
    ask: 'Câmbio utilizado',
    convertedValue: 'Valor convertido',
    convertedFrom: 'Moeda de conversão',
    buttons: 'Editar/Excluir',
  };

  const data = expenses.map((each) => {
    const exchanges = each.exchangeRates[each.currency];
    return ({
      ...each,
      name: exchanges.name.split('/')[0],
      ask: Number(exchanges.ask).toFixed(2),
      value: Number(each.value).toFixed(2),
      convertedValue: (each.value * exchanges.ask)
        .toFixed(2),
      convertedFrom: 'Real',
      buttons: <Buttons id={ each.id } />,
    });
  });

  return (
    <table>

      <thead className="head">

        <tr>
          {Object.values(columns).map((each) => (
            <th key={ each } className="title">
              {each}
            </th>))}
        </tr>

      </thead>

      <tbody className="body">

        {data.map((each, ii) => (
          <tr key={ ids[ii] }>
            {Object.keys(columns).map((title) => (
              <td
                className="content"
                key={ Math.random() }
              >
                {each[title]}

              </td>
            ))}
          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default TableOfExpenses;
