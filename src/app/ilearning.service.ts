import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IlearningService {

  constructor(private http:HttpClient) { }

   exam(){
     console.log("this method is work")
     return this.http.get('http://localhost:3000/Item');
   }
  
}
