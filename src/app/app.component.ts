import { Component } from '@angular/core';

import {SampleService} from './services/sample.service'

interface myData{
    
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent     {
  lstEmployees=[];
  constructor(private sampleSer:SampleService){

  }
  ngOnInit(){
   this.lstEmployees=this.sampleSer.getData().subscribe(res=>{
     console.log(res)
     this.lstEmployees=res;
   })
  }
  title = 'app';
}
