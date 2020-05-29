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
    return res.results.map(this.transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}`);
    return this.transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results.map(this.transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`);
    // console.log(planet); // проверяем сырой ответ
    return this.transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res.results.map(this.transformStarship);
  }

  getStarship(id) {
    const starship = this.getResource(`starships/${id}`);
    return this.transformStarship(starship);
  }

  // eslint-disable-next-line class-methods-use-this
  getId(item) {
    const idRegExp = /\/([0-9]*)\/$/; // группа цифр из url
    return item.url.match(idRegExp)[1];
  }

  transformPlanet = (planet) => ({
    id: this.getId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  })

  transformStarship = (starship) => ({
    id: this.getId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity,
  })

  transformPerson = (person) => ({
    id: this.getId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birthYear,
    eyeColor: person.eyeColor,
  })
}
