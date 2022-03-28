import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumericValues() {
  const [column, setColumns] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const { handleClick, optionColumns } = useContext(PlanetsContext);

  return (
    <nav>
      <h3>Dropdown</h3>
      <form>
        <label htmlFor="column">
          Coluna
          <select
            id="column"
            data-testid="column-filter"
            onChange={ (event) => { setColumns(event.target.value); } }
          >
            {optionColumns.map((optionColumn) => (
              <option key={ optionColumn } id={ optionColumn }>
                {optionColumn}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor={ comparison }>
          Operador
          <select
            id={ comparison }
            data-testid="comparison-filter"
            onChange={ (event) => { setComparison(event.target.value); } }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            value={ value }
            id="value"
            type="number"
            data-testid="value-filter"
            onChange={ (event) => { setValue(event.target.value); } }
          />
        </label>
      </form>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => handleClick(column, comparison, value) }
      >
        Filtrar
      </button>
    </nav>
  );
}

export default FilterNumericValues;
