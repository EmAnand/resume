import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data } from 'src/app/shared-module/dimensionData';
import { iLanguage } from '../models/resume';

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
  item:any | null= data.DimensionData.Language
  lang:any | null = data.DimensionData.Language.Data
  list:any | null = data.DimensionData.Listening.Data
  Read:any | null = data.DimensionData.Reading.Data
  sprek: any | null= data.DimensionData.Speaking.Data
  Write: any | null = data.DimensionData.Writing.Data
  abc:iLanguage={

  LanguageName:null,
  Listening: 0,
  Reading:0,
  Speaking:0,
  Writing:0,
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
  constructor(private _formBuilder: FormBuilder) {
    
   
  }

  ngOnInit(): void {
  
    const Skills= new FormArray([
      new FormControl(null)
    ]);
   
    

  
  }

  formsubmit(){

    // this.abc=f.value;
    this.edit=false

    console.log("abc - ",this.abc)
    //console.log(f.value)
  // this.abc={
  //   LanguageName:f.value.LanguageName,
  // }
  // this.abc={
  //   LanguageName:f.value.LanguageName,
  //   Writing:f.value.Writing,
  //   Reading:f.value.Reading,
  //   Speaking:f.value.Speaking,
  //   Listening:f.value.Listening,
  //   IsMotherTongue:f.value.IsMotherTongue
  // }
  
  }
  editform(){
    this.edit=true;
    
  }

  onSubmit(){
    console.log(this.languageForm)
  }

}
