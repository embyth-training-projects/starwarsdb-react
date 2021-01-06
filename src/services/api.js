const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

export default class Swapi {
  constructor() {
    this._endPoint = `https://swapi.dev/api`;

    this._adaptPlanetToClient = this._adaptPlanetToClient.bind(this);
  }

  getAllPlanets() {
    return this._load({url: `planets`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getPlanet(id) {
    return this._load({url: `planets/${id}`})
      .then(Swapi.toJSON)
      .then(this._adaptPlanetToClient);
  }

  getAllPeople() {
    return this._load({url: `people`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getPerson(id) {
    return this._load({url: `people/${id}`})
      .then(Swapi.toJSON)
      .then(this._adaptPersonToClient);
  }

  getAllStarships() {
    return this._load({url: `starships`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getStarship(id) {
    return this._load({url: `starships/${id}`})
      .then(Swapi.toJSON)
      .then(this._adaptStarshipToClient);
  }

  _getIdFromUrl(url) {
    return url.match(/\/([0-9]*)\/$/)[1];
  }

  _adaptPlanetToClient(planet) {
    return {
      id: this._getIdFromUrl(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _adaptPersonToClient(person) {
    return {
      id: this._getIdFromUrl(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

  _adaptStarshipToClient(starship) {
    return {
      id: this._getIdFromUrl(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  _load({
    url,
    method = `GET`,
    body = null,
    headers = new Headers(),
  }) {
    return fetch(
      `${this._endPoint}/${url}`,
      {method, body, headers}
    )
      .then(Swapi.checkStatus)
      .catch(Swapi.catchError);
  }

  static toJSON(response) {
    return response.json();
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static catchError(error) {
    throw error;
  }
}
