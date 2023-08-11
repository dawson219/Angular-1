import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  caption= "ON"
  flag= false

  constructor() {
    this.username = "Test";
    console.log("Inside Constructor")
  }

  ngOnInit(): void {
    console.log("Inside OnInit")
  }

  changeUserName(name: string){
    this.username = name
    this.caption = this.caption === "ON" ? "OFF" : "ON"

    this.changeVisibility()
  }

  changeVisibility() {
    this.flag = !this.flag
  }
}
