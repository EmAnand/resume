import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'src/app/shared-module/dimensionData';
import { iQualification } from '../models/resume';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  ab:any | null=null;
  edit:boolean=false;
  countryList:any | null= data.DimensionData.Country.Data
    qualification:iQualification={
    Study:null,
    StudyTitle:null,
    InstitutionUrl:null,
    InstitutionName:null,
    Country:null ,
    City:null,
    Province:null,
    ZipCode:null,
    StudyFrom: new Date(2022,2,10) ,
    StudyTo:new Date(10,6,2016) ,
    StillOn:false ,
    HideFromCV:false ,
    Stream:null ,
  
  }
    constructor() { }
  
    ngOnInit(): void {
    }
  
    formsubmit(f:NgForm){
  
      console.log(f.value)
      this.edit=false
    }
    editform(){
      this.edit=true;
    }

}
