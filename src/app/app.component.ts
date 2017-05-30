import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MovieSearchService } from './movie-search.service';
import { GenreMapService } from './genre-map.service';
import { genre } from './genre-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieSearchService,GenreMapService]
})
export class AppComponent {
  term = new FormControl();
  movieNameResult;
  genreArray:genre[];
  num=1;
  constructor(private moviesearchservice:MovieSearchService,private genremapservice:GenreMapService){this.term.valueChanges
    .debounceTime(500).distinctUntilChanged()
    .subscribe(term => this.moviesearchservice.getMovie(term,this.num).subscribe(movieNameResult => this.movieNameResult = movieNameResult.results) );   
    this.genremapservice.getGenreList().subscribe(data=>this.genreArray=data.genres);
}

  getGenre(x) {
    let genreArray=[];
    this.genreArray.forEach(function(element){
      if(x.includes(element.id))
        genreArray.push(element.name);
  });
  return genreArray;
  }
}
