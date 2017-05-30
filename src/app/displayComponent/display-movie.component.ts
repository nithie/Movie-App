import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SearchComponent } from '../searchComponent/search.component';
import { GenreMapService } from './genre-map.service';
import { genre } from './genre-class';

@Component({
  selector: 'display',
  templateUrl:'./display-movie.html',
  styleUrls: ['./display-movie.css'],
  providers:[GenreMapService]
})

export class DisplayMovie{

  genreArray:genre[];

constructor(private movieArray:SearchComponent,private genremapservice:GenreMapService){
  this.genremapservice.getGenreList().subscribe(data=>this.genreArray=data.genres); 
}

 getGenre(arrayOfGenre) {
    
    let genreArray=[];
    this.genreArray.forEach(function(element){
      if(arrayOfGenre.includes(element.id))
        genreArray.push(element.name);
  });
    return genreArray;
}
}