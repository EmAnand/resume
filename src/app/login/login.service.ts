import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post('http://api.1stresume.com/api/Identity/login', model)
  }

  signup(model:any){
    return this.http.post('http://api.1stresume.com/api/Identity/InsertUser' , model)
  }

 
}
