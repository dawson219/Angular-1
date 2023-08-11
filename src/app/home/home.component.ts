import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked
{
  constructor() {
    alert('Constructor Called');
  }

  ngOnInit(): void {
    alert('OnInit Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('OnChanges Called');
  }

  ngOnDestroy(): void {
    alert('OnDestroy Called');
  }

  ngAfterContentInit(): void {
    alert('After Content Init');
  }
  ngAfterViewInit(): void {
    alert('After View Init');
  }

  ngAfterContentChecked(): void {
    alert('After Content Checked');
  }

  ngAfterViewChecked(): void {
    alert('After View Checked');
  }

  ngDoCheck(): void {
    alert('Do Check');
  }
}
