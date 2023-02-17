import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ViewPlacesComponent } from './Components/view-places/view-places.component';
import { PlacesComponent } from './Components/place/place.component';
import { AddPlaceComponent } from './Components/add-place/add-place.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { PlacePipe } from './Pipes/place.pipe'


@NgModule({
  declarations: [
    AppComponent,
  
  
    ViewPlacesComponent,
          PlacesComponent,
          AddPlaceComponent,
          EmployeeComponent,
          PlacePipe,

  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
