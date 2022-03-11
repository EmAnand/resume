import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'src/app/shared-module/dimensionData';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

 experi:any| null;
 edit:boolean=false;
 countryList:any | null=data.DimensionData.Country.Data
  
  constructor(private resumeService:ResumeService) { 
    this.experi=resumeService.GetExperience("userid", "resumeid")
  }

  ngOnInit(): void {

    console.log()
    
  }

  
  formsubmit(f:NgForm){
    this.edit=false;
    console.log(f.value)
    if(f.valid){
      this.resumeService.setExperience(f, 'userId');
    }
  }
  editform(){
this.edit=true;    
  }

}
