import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { iProfile } from './model';

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

 
  GetProfile(userId:string, resumeId:string) :iProfile{
    return{
      "MobileNo" : '7533082342',
      "Occuption": "Private Job",
      "Industry" : "Private Sector",
      "City" : "New Delhi",
      "CountryCode" : '+91',
      "Country" : "India",
      "Email" : "Vikas4@gmail.com",
      "EmailVerify" : "Yes",
    }
  }
  SetProfile(f:any, userId:string){
    if(!!f.valid){
      console.log(f)
    }
  }
}
