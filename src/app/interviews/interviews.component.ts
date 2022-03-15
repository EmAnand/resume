import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
item:any;

editOther:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  editform(){

  }
  formsubmit(f:NgForm){

  }
}
