import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  name!: string;
  time!: string;

  num1!: number;
  num2!: number;
  ans!: number

  // DI
  constructor(private service: UserService){

  }

  greetMe(){
    let res = this.service.greet(this.name , this.time)
    alert(res)
  }

  addNumbers(){
    let ans = this.service.getSum(this.num1, this.num2);
    this.ans = ans;
  }
}
