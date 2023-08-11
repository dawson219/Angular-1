import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-attribute-class',
  templateUrl: './ng-attribute-class.component.html',
  styleUrls: ['./ng-attribute-class.component.css']
})
export class NgAttributeClassComponent {
  myClass=""

  setClass1() {
    this.myClass = "one"
  }

  setClass2() {
    this.myClass = "four three"
  }
}
