export default class SwApi {
  constructor() {
    this.apiBase = 'https://swapi.dev/api/';
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    // res.ok содержит true при получении OK-статуса (200-299)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    const awaitRes = await res.json();
    return awaitRes;
  }

  async getAllPeople() {
    const res = await this.getResource('people/');
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}
