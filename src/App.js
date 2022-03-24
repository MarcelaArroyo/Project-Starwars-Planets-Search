import React from 'react';
import './App.css';
import FilterNumericValues from './components/FilterNumericValues';
// import FilterTablePlanets from './components/FilterTablePlanets';
import InputFilterPlanets from './components/InputFilterPlanets';
import TablePlanets from './components/TablePlanets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Starwars</h1>
      <InputFilterPlanets />
      <FilterNumericValues />
      <TablePlanets />
    </PlanetsProvider>
  );
}

export default App;
