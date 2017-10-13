import { Slang } from '../../models/slang'
import { slangFormRules } from '../../models/validator'
import { inject, NewInstance } from 'aurelia-dependency-injection'
import { ValidationController} from 'aurelia-validation'
import { SlangService } from '../../backend/slang-service'
import { Router } from 'aurelia-router'

@inject(Router, SlangService, NewInstance.of(ValidationController))
export class NewSlang {

  controller = null

  constructor(router, slangService, controller) {
    this.slangService = slangService
    this.router = router
    this.slang = new Slang()
    this.countries = [
      "PERU", "VENEZUELA", "COLOMBIA", "URUGUAY", "BRASIL", "ARGENTINA"
    ]
    this.slangValidationController = controller
    this.slangValidationController.addObject(this.slang, slangFormRules)
  }

  createSlang() {
    let self = this
    this.slangValidationController.validate()
      .then(result => {
        if (result.valid) {
           self.slangService.createSlang(self.slang)
           .then(data => {
             self.router.navigate(`#/slang/${data._id}`)
           })
        }
      })
    
  }
}