import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './_components/user/user.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgAttributeClassComponent } from './ng-attribute-class/ng-attribute-class.component';
import { NgStyleExComponent } from './ng-style-ex/ng-style-ex.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { VehicleListComponent } from './_components/vehicle-list/vehicle-list.component';
import { CustomerComponent } from './_components/customer/customer.component';
import { PersonComponent } from './_components/person/person.component';
import { ParentComponent } from './_components/parent/parent.component';
import { ChildComponent } from './_components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserDetailsComponent,
    NgIfElseComponent,
    NgForExampleComponent,
    NgSwitchExampleComponent,
    NgAttributeClassComponent,
    NgStyleExComponent,
    BuiltInPipesComponent,
    VehicleListComponent,
    CustomerComponent,
    PersonComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
