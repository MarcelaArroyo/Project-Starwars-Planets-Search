import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import PlanetsContext from '../context/PlanetsContext';

function TablePlanets() {
  const { planets, filterByName, filterByNumericValues } = useContext(PlanetsContext);
  // Requisito 3 e 4
  const [arrFilterPlanets, setArrFilterPlanets] = useState([]);

  useEffect(() => {
    setArrFilterPlanets([...planets]);
  }, [planets]);

  useEffect(() => {
    let accPlanets = [...planets];
    const filterPlanets = () => {
      filterByNumericValues.forEach(({ column, comparasion, value }) => {
        if (comparasion === 'maior que') {
          const maior = accPlanets
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
          accPlanets = [...maior];
        } else if (comparasion === 'menor que') {
          const menor = accPlanets
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
          accPlanets = [...menor];
        } else if (comparasion === 'igual a') {
          const igual = accPlanets
            .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
          accPlanets = [...igual];
        }
      });
      return setArrFilterPlanets([...accPlanets]);
    };
    filterPlanets();
  }, [filterByNumericValues]);

  return (
    <section>
      {filterByNumericValues.map(({ column, comparasion, value }, index) => (
        <h4 key={ index }>
          {column}
          {' '}
          {comparasion}
          {' '}
          {value}
        </h4>
      ))}
      <br />
      <hr size="4" color="#C5AC11" />
      <br />
      <table className="table-planets">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {arrFilterPlanets ? (
            arrFilterPlanets.filter((planet) => planet.name.includes(filterByName.name))
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
          ) : (
            <p>Carregando...</p>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default TablePlanets;
