import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MovieSearchService } from './movie-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieSearchService]
})
export class AppComponent {
  searchText:string;
  movieNameResult;
  totalPages;

  constructor(private moviesearchservice:MovieSearchService){}
  
  OnSearch(){
    this.moviesearchservice.getMovie(this.searchText)
    .subscribe(movieNameResult => {this.movieNameResult = movieNameResult.results;
                                   this.totalPages=movieNameResult.total_pages});
    }
  
}
