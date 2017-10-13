import { Slang } from '../models/slang'
import { HttpClient, json } from 'aurelia-fetch-client'
import { inject } from 'aurelia-framework'

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

  createSlang(slang) {
    return this.http.fetch('slangs', {
      method: 'post',
      body: json(slang)
    })
    .then(response => response.json())
    .then(data => data)
  }

}