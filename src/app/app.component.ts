import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material-Demo';
  today=Date();


  users={
    name:"kajal",
    age:25
  }
}
