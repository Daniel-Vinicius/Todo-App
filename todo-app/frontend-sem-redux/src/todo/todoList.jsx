import React from "react";
import renderRows from './utils/renderRows'

export default () => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className="texto">Descrição</th>
          <th className='tableActions texto'>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
