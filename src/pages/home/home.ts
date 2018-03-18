import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WikiSearchService } from '../../app/wiki-search.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private searchResults: Array<object> = null;

  constructor(public navCtrl: NavController, private wikiSearchService: WikiSearchService) {}

  // search box input event handler
  searchWiki(event: KeyboardEvent) {

    let searchKeyword = (<HTMLInputElement>event.target).value;

    if (searchKeyword == "") { 
      this.searchResults = null; 
    } else {

    this.wikiSearchService.search(searchKeyword).subscribe(searchResponses => {
      this.searchResults = searchResponses;
    });

    } // if else

  } // searchWiki(event: KeyboardEvent)

} // class HomePage 
