import { Component, Input } from '@angular/core';


@Component({
  selector:'results-list',
  templateUrl: 'results.html'
})

export class ResultsListPage {

  // declare results store
  private results: Array<object> = null;

  constructor() { }

  @Input()
  set searchResults(searchResults: Array<object>) {

    // set search results
    this.results = searchResults;

    console.log(this.results);
  }
}
