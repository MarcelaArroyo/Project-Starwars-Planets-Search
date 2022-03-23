import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputFilterPlanets() {
  const { handleChange } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Planet name"
        />
      </label>
    </div>
  );
}

export default InputFilterPlanets;
