import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input()
  companyname!:string;

  @Output()
  event1: EventEmitter<string> = new EventEmitter<string>()

  sendData(){
    return this.event1.emit(this.companyname)
  }
}
