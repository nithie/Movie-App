import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MovieSearchService } from './movie-search.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[MovieSearchService]
})

export class SearchComponent {
  term = new FormControl();
  movieNameResult=[];
  name:string;
  
  totalPage:number;

  constructor(private moviesearchservice:MovieSearchService){

    this.term.valueChanges
      .debounceTime(500).distinctUntilChanged()
        .subscribe(term => {this.moviesearchservice.getMovie(term)
          .subscribe(movieNameResult => {this.movieNameResult = movieNameResult.results;
            this.totalPage=movieNameResult.total_pages});
            this.name=term; });

      
    
}

onScroll(){
  if(this.moviesearchservice.pageNum<=this.totalPage)
    this.moviesearchservice.pageNum++;
  this.moviesearchservice.getMovie(this.name).subscribe(data =>{
  for(let ele of data.results){
    this.movieNameResult.push(ele);
    }
  });
  }
}
