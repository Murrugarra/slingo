import { Slang } from '../models/slang'

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

export class SlangService {

  getSlangList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(slangList)
      }, latency)
    })     
  }

  getSlangDetail(slang, country) {
    
    let result = null

    slangList.forEach(slangItem => {
      if (slangItem.slang == slang) 
        result = slangItem
    })

    result.meaning = "Significado de la palabra va escrito aca para que los demas aprendan que shusha es"

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result)
      }, latency)
    })
  }

}