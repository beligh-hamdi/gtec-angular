import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Array<Book>;
  book: Book;
  detailsEnabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  showDetails(book) {
    this.detailsEnabled = true;
    this.book = book;
  }

}
