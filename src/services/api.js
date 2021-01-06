const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

export default class Swapi {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getAllPlanets() {
    return this._load({url: `planets`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getPlanet(id) {
    return this._load({url: `planets/${id}`})
      .then(Swapi.toJSON);
  }

  getAllPeople() {
    return this._load({url: `people`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getPerson(id) {
    return this._load({url: `people/${id}`})
      .then(Swapi.toJSON);
  }

  getAllStarships() {
    return this._load({url: `starships`})
      .then(Swapi.toJSON)
      .then((body) => body.results);
  }

  getStarship(id) {
    return this._load({url: `starships/${id}`})
      .then(Swapi.toJSON);
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
