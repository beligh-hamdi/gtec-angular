import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from './shared/models/book';

import {BooksService} from './shared/services/books.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  booksObs: Observable<Book[]>;

  mixObs: Observable<any[]>;

  book: Book;


  subscription: Subscription;
  subscription1: Subscription;

  constructor(private booksService: BooksService) {}

  ngOnInit() {

   // this.books = this.booksService.getBooks();

    this.booksObs = this.booksService.fetchBooks();

    this.subscription = this.booksService.fetchBooks().subscribe(
      (books) => {
        this.books = books;
      },
      error => { console.log('error', error);},
      () => { console.log('finish'); }
    );


    this.init();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

  private init() {

    this.subscription1 = this.booksService.deleteBook(1).subscribe(
      (book) => {
        this.book = book;
      },
      error => { console.log('error', error);},
      () => { console.log('finish'); }
    );
  }

}
