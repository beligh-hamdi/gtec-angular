import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from "../shared/models/book";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;

  title = new FormControl('',
  [Validators.required, Validators.minLength(3)]);

  description = new FormControl('');
  formBookReactive: FormGroup;

  title1: string;
  @Output() formSaved = new EventEmitter();

  constructor(private fb: FormBuilder) {


  }

  saveBookReactive() {
    console.log('saveBookReactive', this.title);

    this.book = new Book();
    this.book.createBook(this.title.value, this.description.value)

    this.formSaved.emit(this.book);
  }

  ngOnInit() {

    this.formBookReactive = this.fb.group({
      'title': this.title,
      'description': this.description
    });

   // this.title = new FormControl('Mon titre', Validators.required);

   // this.title1 = 'svsd';

  }

  saveBook(bookForm) {
    this.formSaved.emit(bookForm.value);
    console.log('bookForm:', bookForm.value);
  }

}
