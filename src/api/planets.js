export async function getPlanetsList() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return setData(data.results);
  } catch (error) {
    return error;
  }
}

export default getPlanetsList;
