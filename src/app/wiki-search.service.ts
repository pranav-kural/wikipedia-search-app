import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiSearchService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  // default search method for wiki-search service
  search(keyword: string) {

    console.log("------ Initiating request to Wikipedia API ------");

    if(keyword == "") { return null; }


    let searchUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&callback=JSONP_CALLBACK&gsrsearch=";

    return this.jsonp.get(searchUrl + keyword).map(response => {

      console.log("------ Data received successfully ------");

      let data = response._body.query.pages;

      return Object.keys(data).map(key => {
        return data[key];
      });
    });

  } // searchUrl()

}  // class WikiSearchService