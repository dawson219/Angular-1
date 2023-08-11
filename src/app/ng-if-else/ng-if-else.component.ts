import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent {
  isValid = true;

  ChangeData(val: boolean){
    this.isValid = val;
  }
}
