import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // Requisito 1 - Requisão da API e salvando no state
  const [planets, setPlanetsData] = useState([]);
  useEffect(() => {
    const getPlanetsList = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPlanetsData(data.results);
      } catch (error) {
        return error;
      }
    };
    getPlanetsList();
  }, []);

  // Requisito 2 - pegando o nome digitado no input e salvando no state pela função handlechange
  const [filterByName, setFilterByName] = useState({ name: '' });
  const handleChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  // Requisito 5
  const [optionColumns, setOptionColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // Requisito 3
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const handleClick = (column, comparasion, value) => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparasion, value }]);
    // Requisito 5
    let filterColumn = [];
    optionColumns.forEach((optionColumn) => {
      if (optionColumn !== column) {
        filterColumn = [...filterColumn, optionColumn];
      }
    });
    return setOptionColumn([...filterColumn]);
  };

  return (
    <main>
      <PlanetsContext.Provider
        value={
          { planets,
            filterByName,
            handleChange,
            handleClick,
            filterByNumericValues,
            optionColumns }
        }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
