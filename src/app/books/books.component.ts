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

  book: Book;

  subscription: Subscription;

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
  }

  private init() {
    this.book = new Book();
    this.book.id = 1;
    this.book.title = 'title1';
    this.book.description = 'description';
  }

}
