import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: NgForm;
  contact:any;
 
  ngOnInit() {
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
//   countryList:country[] = [
//     new country("1", "India"),
//     new country('2', 'USA'),
//     new country('3', 'England')
//   ];
//   constructor() {
   
//    }

//   ngOnInit() {
//   }

//   onSubmit(contactForm) {
//     console.log(JSON.stringify(contactForm.value));
//   }
// }


// export class country {
//   id:string;
//   name:string;
 
//   constructor(id:string, name:string) {
//     this.id=id;
//     this.name=name;
//   }
}