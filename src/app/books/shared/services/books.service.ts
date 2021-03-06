import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

@Injectable()
export class BooksService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private apiUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  fetchBooks(): Observable<Book[]> {
    return this.http.get(`${this.apiUrl}/books`)
      .map(response => response.json())
      .catch(this.handleError)
      .retry(3)
      .take(1);
  }

  fetchMix(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/db`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  fetchBook(id: number): Observable<Book> {
    return this.http.get(`${this.apiUrl}/books/${id}`)
      .map(response => response.json())
      .retry(3);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete(`${this.apiUrl}/books/${id}`, this.options)
      .map(response => response.json());
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post(`${this.apiUrl}/books`, book, this.options)
      .map(response => response.json());
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put(`${this.apiUrl}/books/${book.id}`, book, this.options)
      .map(response => response.json());
  }

  searchBook(query: string) {
    return this.http.get(`${this.apiUrl}/books?q=${query}`)
      .map(response => response.json())
      .retry(3);
  }


  // https://github.com/beligh-hamdi/gtec-angular
  //  https://tinyurl.com/lbwlapn

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

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
