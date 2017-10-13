import { inject } from 'aurelia-framework'
import { SlangService } from '../../backend/slang-service'

@inject(SlangService)
export class SlangDetail {
  slang = null
  slangTitle = null

  constructor(slangService) { 
    this.slangService = slangService
  }

  activate(params) {    
    this.slangTitle = 'algo'    
    this.slangService.getSlangDetail(params._id).then(slangDetail => {
      this.slang = slangDetail
    })

  }
}