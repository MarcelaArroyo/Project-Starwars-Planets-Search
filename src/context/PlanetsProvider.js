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

  return (
    <main>
      <PlanetsContext.Provider value={ { planets, filterByName, handleChange } }>
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
