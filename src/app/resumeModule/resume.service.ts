import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPersonalInfo } from './models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http:HttpClient) { }

  GetPersonalInfo(userId:string,resumeId:string){
    return  {
      "AboutMe": "My name is Vikash kumar. I have complete B.tech in Computer Science",
      "AlternateEmail": "vikash@gmail.com",
      "AlternatePhoneNo": "1234567891",
      "City": "muzaffarpur",
      "CurrentCountry": "Indian",
      "DOB": "28/02/1995",
      "DisplayName": "Vikash kumar",
      "Email": "vikas4@gmail.com",
      "Gender": "Male",
      "Hobbies": "Watching a Movie",
      "Nationality": "Indian",
      "code": +91,
      "PhoneNO": 7533082342,
      "Province": "Muzaffarpur",
      "SummaryText": "Hello Eeveryone!",
      "ZipCode": 842002
          
    }
  };

  SetPersonalInfo(f:any,userId:string){
    if(!!userId){
      console.log(f);
    }
  }

  GetQualification(userId:string,resumeId:string){
return  {
  
    "City": "New Delhi",
    "Country": "India",
    "HideFromCV": "True",
    "InstitutionName": "GNIOT Group of Institutions, Greater Noida",
    "InstitutionUrl": "https://www.gniotgroup.edu.in/",
    "StillOn": "True",
    "Stream": "Computer Science Engineer",
    "Study": "Engineering",
    "StudyFrom": "10/06/2013",
    "StudyTo": "10/06/2016",
    "StudyTitle": "B.Tech",
    "ZipCode": "840121"
 }
  };
  setQualification(f:any,userId:string){
    if(!!userId){
      console.log(f);
    }
  }

  GetExperience(userId:string,resumeId:string){
    return{
      
        "City": "muzaffarpur",
        "Country": "India",
        "ExperienceFrom": "5/10/2021",
        "ExperienceTo": "17/2/2022",
        "OrganizationImg": "",
        "OrganizationName": "GNIOT Group of Institutions, Greater Noida",
        "OrganizationUrl": "https://www.gniotgroup.edu.in/",
        "Position": "Software Developer",
        "Province": "Muzaffarpur",
        "Responsibilities": "Developer",
        "StillWorking": false,
        "ZipCode": 110019
    }
  };
  setExperience(f:any,userId:string){
    if(!!userId){
        console.log(f);
      }
  }

Getlanguage(userId:string,resumeId:string){
  return{
    IsMotherTongue: true,
        LanguageName: "hindi",
        Listening: 1, 
        Reading: 2,
        Speaking: 3,
        Writing: 4
  }
};

SetLanguage(f:any, userId:string){
  if(!!userId){
    console.log(f)
  }
}

}
