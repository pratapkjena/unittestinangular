import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SampleService {
  url='http://localhost:3000/getEmployeeData';
  constructor(private _http:HttpClient) {

   }

  getData=function(){
        return this._http.get(this.url)
       //.map(res=>res.json())
  }

}


// return [
//   {name:"pratap",address:"Bangalore",online:true},
//   {name:"pranit",address:"Bangalore",online:false},
//   {name:"prafulla",address:"cuttack",online:true},
//   {name:"pravat",address:"jammu",online:true}
// ]