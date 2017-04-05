import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  homeTitle = 'Home Page 1';

  textChanged($event) {
    this.title = $event.title;
    console.log($event);
  }

}
