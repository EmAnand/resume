import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-resume',
  templateUrl: './new-resume.component.html',
  styleUrls: ['./new-resume.component.css']
})
export class NewResumeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router: Router) {
this.activatedRoute.paramMap.subscribe(val=>{
  console.log(val)
})
   }

  ngOnInit(): void {
    //this.href = this.router.url;
    console.log(this.router.url);
  }

}
