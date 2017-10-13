import { Slang } from '../models/slang'
import { HttpClient } from 'aurelia-fetch-client'
import { inject } from 'aurelia-framework'

let slangList = [
  new Slang("Chevere", ["Bakan", "Paja", "Piola"]),
  new Slang("Flaca", ["Agarre", "Trampa"]),
  new Slang("Tela", ["Misio", "Monce"]),
  new Slang("Asado", ["Palteado"]),
  new Slang("Cabro", ["Rosca", "Cabrilla", "Chivo"]),
  new Slang("Cana", ["Canada"]),
  new Slang("Misio", ["Aguja"]),
  new Slang("Causa", ["Brother", "Cumpa", "Soli", "Bateria"])
]

let latency = 1000

@inject(HttpClient)
export class SlangService {

  constructor(httpClient) {
    httpClient.configure(config => {
      config.withBaseUrl('http://localhost:3000/api/')
    })
    this.http = httpClient
  }

  getSlangList(country) {
    return this.http.fetch(`slangs?country=${country}`)
      .then(response => response.json())
      .then(data => data)    

  }

  getSlangDetail(_id) {    
    return this.http.fetch(`slangs/${_id}`)
      .then(response => response.json())
      .then(data => data)
  }

}