import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name:string = "BillDesk";

  read(e: any){
    alert(e)
    this.name = e
  }
}
