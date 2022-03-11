import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data } from 'src/app/shared-module/dimensionData';
import { iLanguage } from '../models/resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  edit:boolean=false;
  starWidth: number = 0;
  openform:any
  rateProduct(event: any) {
    //this.starWidth = rateValue * 75 / 5;
    this.starWidth= event.target.id 
    console.log(event.target.id)
    event.target.style.color="yellow"
  }
  Country:any
  DimensionData:any
//  count:any |null= DimensionData.
  item:any | null;
  lang:any | null = data.DimensionData.Language.Data
  list:any | null = data.DimensionData.Listening.Data
  Read:any | null = data.DimensionData.Reading.Data
  sprek: any | null= data.DimensionData.Speaking.Data
  Write: any | null = data.DimensionData.Writing.Data
  abc:iLanguage={

  LanguageName:null,
  Listening: 1,
  Reading:2,
  Speaking:2,
  Writing:1,
  IsMotherTongue:false,

}
languageForm=  new FormGroup({
  IsMotherTongue : new FormControl(),
  LanguageName : new FormControl(),
  Listening : new FormControl(),
  Reading: new FormControl(),
  Speaking: new FormControl(),
  Writing: new FormControl()

})
  constructor(private _formBuilder: FormBuilder, 
    private resumeService:ResumeService) {
    this.item=resumeService.Getlanguage("userid", "resumeid")
   
  }

  ngOnInit(): void {
  
    const Skills= new FormArray([
      new FormControl(null)
    ]);
   
    

  
  }

  formsubmit(){

    this.edit=false
    console.log("abc - ",this.abc)
  if(this.abc){
    this.resumeService.SetLanguage(this.abc, 'userId');
  }  
  
  }
  editform(){
    this.edit=true;
    
  }

  onSubmit(){
    console.log(this.languageForm)
  }

}
