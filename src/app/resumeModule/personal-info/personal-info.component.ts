import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {data} from '../../shared-module/dimensionData'
import { iPersonalInfo } from '../models/resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  d:any | null =data.DimensionData.Gender
  edit:boolean=false;	
  //data:iPersonalInfo;
  countryList:any | null=data.DimensionData.Country.Data
    constructor(private resumeService:ResumeService) {
     //this.data = this.resumeService.GetPersonalInfo('userId','resumeId');
     }
  
    ngOnInit(): void {
      
    }
  
    formsubmit(f:NgForm){
      console.log(f.value)
      if(f.valid){
        this.resumeService.SetPersonalInfo(f,'userId');
      }
  }
    editform(){
      this.edit=true;
  
    }    
}
