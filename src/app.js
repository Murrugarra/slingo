export class App {

  constructor() {
    
  }

  configureRouter(config, router) {
    config.title = 'Slingo'
    config.map([
      { route: '', moduleId: 'components/list/slang-list', title: 'slangs', name: 'slang-list' },
      { route: 'slang/:_id', moduleId: 'components/detail/slang-detail', name: 'slang-detail' },
      { route: 'new', moduleId: 'components/create/new-slang', name: 'new'}
    ])
    this.router = router
  }

}
