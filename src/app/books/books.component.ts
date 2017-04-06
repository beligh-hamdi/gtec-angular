import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from './shared/models/book';

import {BooksService} from './shared/services/books.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  booksObs: Observable<Book[]>;
  book: Book;
  subscription: Subscription;
  subscription1: Subscription;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.init();
  }

  selectedBook($event) {
    this.subscription1 = this.booksService.fetchBook($event.id).subscribe(
      (book) => {
        this.book = book;
      },
      error => {
        console.log('error', error);
      },
      () => { console.log('finish'); }
    );
  }

  formSaved(book: Book) {
    this.subscription1 = this.booksService.createBook(book).subscribe(
      (b) => {
        //this.book = b;
        this. init();
      },
      error => {
        console.log('error', error);
      },
      () => { console.log('finish'); }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
  }

  private init() {

    this.booksObs = this.booksService.fetchBooks();

    this.subscription = this.booksService.fetchBooks().subscribe(
      (books) => {
        this.books = books;
      },
      error => {
        console.log('error', error);
      },
      () => { console.log('finish'); }
    );
  }

}
