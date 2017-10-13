import { ValidationRules } from 'aurelia-validation'

export const slangFormRules = ValidationRules
  .ensure('slang').displayName('Slang')
  .minLength(3)
  .maxLength(50)
  .required()
  .ensure('meaning').displayName('Meaning')
  .minLength(10)
  .maxLength(100)
  .required()
  .rules