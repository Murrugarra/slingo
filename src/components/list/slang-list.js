import { SlangService } from '../../backend/slang-service'
import { inject } from 'aurelia-framework'

@inject(SlangService)
export class SlangList {     
  constructor(slangService) {
    this.slangService = slangService
    this.slangList = []
  }

  created() {
    this.slangService.getSlangList().then(slangs => {
      console.log(slangs)
      this.slangList = slangs
    })
  }

}