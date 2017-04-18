namespace databaseexample.Controllers {

  export class ShowController {
    public shows;

    constructor(showService) {
      this.shows = showService.getAll();
    }
  }

}
