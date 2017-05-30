import { Injectable,Input } from '@angular/core';
import { Http , Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieSearchService{

    constructor(private http:Http){}
    
    @Input()
    pageNum=1;
    
    getMovie(movieName){
       const url='https://api.themoviedb.org/3/search/movie?api_key=4f710990a104778fce0a10e1e1596f2b&language=en-US&query='+movieName+'&page='+this.pageNum +'&include_adult=false';
        return this.http.get(url)
                .map((response:Response) => response.json());
}
    
}