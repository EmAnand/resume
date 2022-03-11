import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {data} from '../../shared-module/dimensionData'
// //import { iPersonalInfo } from '../models/resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  d:any | null ;


  //a:any | null = data.DimensionData.Gender.Data
  edit:boolean=false;	
  //data:iPersonalInfo;
  countryList:any | null=data.DimensionData.Country.Data
 c: any | null= data.DimensionData.CodeList.Data
    constructor(private resumeService:ResumeService) {
     this.d = this.resumeService.GetPersonalInfo('userId','resumeId');
     }
  
    ngOnInit(): void {
      
    }
  
    formsubmit(f:NgForm){
      
      this.edit=false;
      console.log(f.value)
      if(f.valid){
        this.resumeService.SetPersonalInfo(f,'userId');
      }

  }
    editform(){
      this.edit=true;
  
    }    
}
