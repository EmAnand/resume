import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'src/app/shared-module/dimensionData';
//import { iQualification } from '../models/resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  ab:any | null;
  edit:boolean=false;
  countryList:any | null= data.DimensionData.Country.Data
   
    constructor(private resumeService:ResumeService) {
      this.ab=resumeService.GetQualification("userId", "resumeid")
     }
  
    ngOnInit(): void {
   
    }
  
    formsubmit(f:NgForm){
      this.edit=false;
      console.log(f.value)
      if(f.valid){
       this.resumeService.setQualification(f , 'userId'); 
      }

    }
    editform(){
      this.edit=true;
    }

}
