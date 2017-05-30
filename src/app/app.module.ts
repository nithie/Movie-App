import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { SearchComponent } from './searchComponent/search.component';
import { DisplayMovie } from './displayComponent/display-movie.component';
import { InfiniteScrollerDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [
    SearchComponent,
    DisplayMovie
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class AppModule { }
