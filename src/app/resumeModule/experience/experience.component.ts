import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

 experi:any| null=null;
 edit:boolean=false;
 countryList:any | null=null;
  
  constructor(private resume:ResumeService) { }

  ngOnInit(): void {

    console.log()
    
  }

  
  formsubmit(f:NgForm){

    console.log(f.value)
    this.edit=false;
  }
  editform(){
this.edit=true;    
  }

}
