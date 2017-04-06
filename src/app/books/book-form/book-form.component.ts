import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  title: FormControl;
  title1: string;
  @Output() formSaved = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.title = new FormControl('Mon titre', Validators.required);

    this.title1 = 'svsd';

  }

  saveBook(bookForm) {
    this.formSaved.emit(bookForm.value);
    console.log('bookForm:', bookForm.value);
  }

}
