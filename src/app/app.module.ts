import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import {SampleService} from './services/sample.service';

import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {LoginComponent} from './components/login/login.component';
import { CounterComponent } from './components/counter/counter.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'admin',component:AdminComponent},
      {path:'counter',component:CounterComponent}
    ])
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
