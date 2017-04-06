import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookSearchComponent } from './books/book-search/book-search.component';

import {BooksService} from './books/shared/services/books.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import {TranslateLoader, TranslateModule, } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import 'hammerjs';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookSearchComponent,
    NavbarComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
