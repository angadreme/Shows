namespace databaseexample.Services {

  class ShowService {
    private SHOW_RESOURCE = this.$resource('/shows');

    constructor(public $resource){}

    public getAll() {
      return this.SHOW_RESOURCE.query();
    }

    public save(show) {
      return this.SHOW_RESOURCE.save(show).$promise;
    }
  }

  angular.module('databaseexample').service('showService', ShowService);

}
