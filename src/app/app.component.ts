import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>This is {{ name }}</h1>
  // <h2>Welcome to {{ company }}</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  name: string;
  time = "4:30 pm";
  company: any;

  constructor(){
    this.name = "Dawson"
    this.company = "Billdesk"
  }

  getMessage(username: string){
    return `Good Morning ${username}`
  }
}
