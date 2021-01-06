import Swapi from './services/api';

const END_POINT = `https://swapi.dev/api`;

const swapi = new Swapi(END_POINT);

swapi.getAllPlanets()
  .then((body) => console.log(body));
