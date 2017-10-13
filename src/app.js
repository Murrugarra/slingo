export class App {

  constructor() {
    
  }

  configureRouter(config, router) {
    config.title = 'Slingo'
    config.map([
      { route: '', moduleId: 'components/list/slang-list', title: 'slangs' },
      { route: 'slang/:_id', moduleId: 'components/detail/slang-detail', name: 'slang-detail' }
    ])
    this.router = router
  }

}
