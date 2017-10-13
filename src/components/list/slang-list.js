import { SlangService } from '../../backend/slang-service'
import { inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'

@inject(SlangService, EventAggregator)
export class SlangList {     
  constructor(slangService, ea) {
    this.slangService = slangService
    this.ea = ea
    this.slangs = []
    this.selectedCountry = 'PERU'
    this.subscribed = false
  }

  attached() {    
    this.subscribe()
    this.retrieveSlangs()
  }

  subscribe() {
    this.ea.subscribe('selectedCountry', payload => {      
      this.selectedCountry = payload.selectedCountry
      this.retrieveSlangs()
      this.subscribed = true
    })
  }

  retrieveSlangs() {    
    this.slangService.getSlangList(this.selectedCountry).then(slgs => {
      this.slangs = slgs
    })
  }

}