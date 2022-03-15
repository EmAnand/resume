import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
item :any |null;
  constructor( private login:LoginService) { 
    this.item=this.login.GetProfile('userId', 'resumeId');
  }

  ngOnInit(): void {
  }

  formsubmit(f:NgForm){
    console.log(f.value)
  } 
}
