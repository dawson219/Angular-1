import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {
  students : any[] = [
    {
        ID: 'std101', FirstName: 'preety', LastName: 'Tiwary',
        Branch: 'CSE', DOB: new Date('1998-03-25'), Gender: 'Female'
    },
    {
        ID: 'std102', FirstName: 'anurag', LastName: 'Mohanty', 
        Branch: 'ETC', DOB: new Date('1999-05-23'), Gender: 'Male'
    },
    {
        ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', 
        Branch: 'CSE', DOB: new Date('1992-07-24'), Gender: 'Female'
    },
    {
        ID: 'std104', FirstName: 'Hina', LastName: 'Sharma', 
        Branch: 'ETC', DOB: new Date('1990-08-19'), Gender: 'Female'
    },
    {
        ID: 'std105', FirstName: 'sambit', LastName: 'Satapathy', 
        Branch: 'CSE', DOB: new Date('1991-04-12'), Gender: 'Male'
    }
  ];
}
