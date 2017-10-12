import { inject } from 'aurelia-framework'
import { SlangService } from '../../backend/slang-service'

@inject(SlangService)
export class SlangDetail {
  slang = null
  slangTitle = null
  selectedCountry = null

  constructor(slangService) { 
    this.slangService = slangService
  }

  activate(slang) {
    this.slangTitle = slang.slang    
    this.selectedCountry = slang.country
    this.slangService.getSlangDetail(slang.slang, slang.country).then(slangDetail => {
      this.slang = slangDetail
    })

  }
}