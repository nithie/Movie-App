
import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GenreMapService{

    constructor(private http:Http){}
    getGenreList(){
       const url='https://api.themoviedb.org/3/genre/movie/list?api_key=4f710990a104778fce0a10e1e1596f2b&language=en-US';
        return this.http.get(url)
                .map((response:Response) => response.json());
}
    
}