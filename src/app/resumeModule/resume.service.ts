import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPersonalInfo } from './models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http:HttpClient) { }

  GetPersonalInfo(userId:string,resumeId:string){
    return  {AboutMe: null,
      AlternateEmail: "zdafd@adsfdsa",
      AlternatePhoneNo: null,
      City: null,
      DOB: new Date(),
      DisplayName: "sdafasdf",
      Email: null,
      Nationality: null,
      PhoneNO: null,
      SummaryText: null,
      ZipCode: null}
  };

  SetPersonalInfo(f:any,userId:string){
    if(!!userId){
      console.log(f);
    }
  }
}
