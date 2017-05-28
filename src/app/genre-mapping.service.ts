import { Injectable } from '@angular/core';

import { genre } from './genre-class';
import { GENRE } from './genre-map.service';

@Injectable()

export class GenreService{
     getHeroes(): Promise<genre[]> {
    return Promise.resolve(GENRE);
  }
}