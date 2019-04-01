import axios from 'axios'
// import React, {Component} from 'react'
// отвечает за отправку данных на сервер 
export default class StroikaServices { //extends Component {
// возвращать пустой массив // пока что это функция будет синхронная
userData = []

// async componentDidMount() {
//   try {
//     const response = 
//     return response.data
//     // console.log(response.data);
//   } catch(e) {
//     console.log(e);
//   }
// }

getUsers = async () => {
  const responce = await axios.get('https://plitka-f8e9c.firebaseio.com/plitka.json')
  return responce.data
}

// componentDidUpdate = (prevProps, prevState) => {
  
// }

// render() {
//   return (
//     <span></span>
//   )
// }
 
// reqisterUsers = async () => {
//     axios.get('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyDCHWby6osExnUK627WHZY08_d1qQJcxEM');
//   }
}


// getUsers() {
//   return new Promise ((resolve, reject) => {
//     window.setTimeout(() => {
//       resolve(this.data)
//       reject(new Error('ERRRRRRRRRRRRRRRRRRRRROR!!!'))
//     }, 700)
//   })
 
// }
// }











// --------------- пример с сервером

// _apiBase = 'https://swapi.co/api'
// _apiImage = 'https://starwars-visualguide.com/assets/img'


// getResource = async (url) => { 
//     const res = await fetch(`${this._apiBase}${url}`); 
//     if(!res.ok) {             
//         throw new Error(`Could not fetch ${url}` +  
//         `, received ${res.status}`)
//     }       
//     return await res.json();                  
// }

//  getAllPeople = async () => {
//     const res = await this.getResource(`/people`);
//     return res.results.map(this._transformPerson) // возвращаем массив людей
// }

// getPerson = async (id) => {
//     const person = await this.getResource(`/people/${id}`)
//     return this._transformPerson(person)
// }

// getAllPlanets = async () => {
//     const res = await this.getResource(`/planets`);
//     return res.results.map(this._transformPlanet)
        
// }

//  getPlanets = async (id) => {
//     const planet = await this.getResource(`/planets/${id}`)
//     return this._transformPlanet(planet)
// }

// getAllStarships = async () => {
//     const res = await this.getResource(`/starships`);
//     return res.results.map(this._transformStarship);     
// }

// getStarships = async (id) => {
//     const starship = await this.getResource(`/starships/${id}`)
//     return this._transformStarship(starship);
// }

// getImagePersons = ( {id} ) => {
//     return `${this._apiImage}/characters/${id}.jpg`
// }

// getImageStarships = ({id}) => {
//     return `${this._apiImage}/starships/${id}.jpg`
// }

// getImagePlanets = ({id}) => {
//     return `${this._apiImage}/planets/${id}.jpg`
// }

// _extractId = (item) => {
// const idRegExp = /\/([0-9]*)\/$/; // регулярные выражения
// return item.url.match(idRegExp)[1];  // [1] - группа а 0 -это idRegExp поскольку он заматчился 
// }

// // изолировали все трансформации данных в нашем классе сервисе и таким образом мы гарантировали что теперь
// // любой компонент который будет получать данные из swapi будет получать корректные данные
// _transformPlanet = (planet) => {
//     return {
//         id: this._extractId(planet),  // тот api который мы используем не публикует внутренние id // искустрвенно добавляем id которое нам не дает api
//         name: planet.name,
//         population: planet.population,
//         rotationPeriod: planet.rotation_period,
//         diameter: planet.diameter
//     }
// }

// _transformPerson = (person) => {
//     return {
//         id: this._extractId(person), 
//         name: person.name,
//         gender: person.gender,
//         birthYear: person.birth_year,
//         eyeColor: person.eye_color
//     }
// }

// _transformStarship = (starship) => {
//     return {
//         id: this._extractId(starship), 
//         name: starship.name,
//         model: starship.model,
//         manufacturer: starship.manufacturer,
//         costInCredits: starship.costInCredits,
//         length: starship.length,
//         crew: starship.crew,
//         passengers: starship.passengers,
//         cargoCapacity: starship.cargoCapacity
//     }
// }
// }