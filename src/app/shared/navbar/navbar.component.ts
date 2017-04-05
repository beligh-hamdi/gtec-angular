import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links: Array<any>;

  constructor() { }

  ngOnInit() {
    this.links = [
      {name: 'Home', path: '/home'},
      {name: 'About', path: '/about'},
      {name: 'Books', path: '/books'}
    ];
  }

}
