import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';


@Injectable()
export class BooksService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  fetchBooks(): Observable<Book[]> {
    return this.http.get(`${this.apiUrl}/books`)
      .map(response => response.json())
      .retry(3);
  }


  getBooks(): Array<Book> {
    const books: Array<Book> = [];
    books.push({
      id: 1,
      title: 'title1',
      description: 'description1'
    });
    books.push({
      id: 2,
      title: 'title2',
      description: 'description2'
    });
    return books;
  }
}
