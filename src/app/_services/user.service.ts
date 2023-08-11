import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private msg:string;

  constructor() { 
    this.msg = "Good"
  }

  getSum(a:number, b:number):number{
    return a+b;
  }

  greet(name: string, daytime: string): any{
    return `${this.msg} ${daytime} ${name} !`
  }
}
