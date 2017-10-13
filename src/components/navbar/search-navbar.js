import { EventAggregator } from 'aurelia-event-aggregator'
import { inject } from 'aurelia-framework'

let delay = 1000

@inject(EventAggregator)
export class SearchNavbar {     
  constructor(ea) {
    this.countries = [
      "PERU", "VENEZUELA", "COLOMBIA", "URUGUAY", "BRASIL", "ARGENTINA"
    ]
    this.selectedCountry = "PERU"
    this.ea = ea
        
  }

  created() {
    setTimeout(() => this.publish(), delay)
  }

  publish() {
    var payload = {"selectedCountry": this.selectedCountry}
    this.ea.publish('selectedCountry', payload)    
  }
}