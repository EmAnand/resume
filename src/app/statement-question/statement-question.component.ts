import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement-question',
  templateUrl: './statement-question.component.html',
  styleUrls: ['./statement-question.component.css']
})
export class StatementQuestionComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

  
}
