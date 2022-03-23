import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
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
  return (
    <main>
      <PlanetsContext.Provider value={ { planets } }>
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
