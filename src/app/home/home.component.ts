import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() description: string;
  @Output() textUpdated = new EventEmitter();

  constructor() {
    console.log('constructor title:', this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('changes:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit title:', this.title);
  }


  btnAction() {
    console.log('btn clicked');
    const obj = {
      users: ['user1', 'user2'],
      title: 'Home will change global title'
    };
    this.textUpdated.emit(obj);
  }

}
