import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  title: FormControl;
  title1: string;

  constructor() { }

  ngOnInit() {

    this.title = new FormControl('Mon titre', Validators.required);

    this.title1 = 'svsd';

  }

  saveBook(bookForm) {
    console.log('bookForm:', bookForm.value);
  }

}
