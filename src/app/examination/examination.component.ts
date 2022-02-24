import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { IlearningService } from '../ilearning.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
id:any;

PaperQuesionNo:number=101;
Item:any= 'this is worked'
data=result.filter(dt=>dt.PaperQuesionNo==this.PaperQuesionNo)[0];
isOptional:boolean=false;
  constructor(private learn:IlearningService,  private router:Router,
    private activeRouter:ActivatedRoute,     private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
) { }
// async getLazy1() {
//     this.viewContainerRef.clear();
//     const { OptionalQuestionComponent } = await import('../optional-question/optional-question.component');
//     this.viewContainerRef.createComponent(
//       this.cfr.resolveComponentFactory(OptionalQuestionComponent)
//     );
//   }

  ngOnInit(): void {
    this.isOptional=(this.data.Question.AnswerType=="MultiCorrect" || this.data.Question.AnswerType=="singleCorrect") ? true :false;
    this.id = this.activeRouter.paramMap.subscribe(Params =>{ this.id=Params.get('id')});
}

checkIsOptional(){
    this.isOptional=(this.data.Question.AnswerType=="MultiCorrect" || this.data.Question.AnswerType=="singleCorrect") ? true :false;
}
Privious(){
    this.PaperQuesionNo=this.PaperQuesionNo-1;
    this.data=result.filter(dt=>dt.PaperQuesionNo==this.PaperQuesionNo )[0];
    console.log(this.data);
    this.checkIsOptional();
}
Next(){
    this.PaperQuesionNo=this.PaperQuesionNo+1;
    this.data=result.filter(dt=>dt.PaperQuesionNo==this.PaperQuesionNo)[0];
    console.log(this.data);
    this.checkIsOptional();
  
}

}

 var result= [ {
  
      "CreationDate": 22122021,
      "ToughId": 5,
      "SubjectName": "Microsoft Certified: Azure Fundamentals",
      "SubjectId": "Mirosoft_AZ900",
      "Question": {
          "AnswerType": "MultiCorrect",
          "AnswerOption": [
              "Basic",
              "Developer",
              "Standard",
              "Profession Direct",
              "Premier"
          ],
          "QuestionText": [
              "Answer by dragging the correct option from the list to the answer area.",
              "Select:",
              "The support plan must allow for new support requests to be opened.",
              "Which of the following are support plans that will allow this? ",
              "Your company intends to subscribe to an Azure support plan."
          ],
          "CorrectAnswer": [1,2,3,4 ],
          "Details": [
              "https://azure.microsoft.com/en-us/support/plans/"
          ]
      },
      "Organization": "Microsoft",
      "PaperQuesionNo": 101
  },


{
  
      "CreationDate": 22122021,
      "ToughId": 4,
      "SubjectName": "Microsoft Certified: Azure Fundamentals",
      "SubjectId": "Mirosoft_AZ900",
      "Organization": "Microsoft",
      "PaperQuesionNo": 102,
      "Question": {
          "AnswerType": "StatementYesNo",
          "AnswerOption": [
              "A Company Can extend a private cloud by adding its own physical servers to the public cloud",
              "To build a hybrid cloud, you must deploy resources to the public cloud",
              "A private cloud must be disconnected from the internet",
          ],
          "QuestionText": [
              "HOTSPOT -",
              "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
              "NOTE: Each correct selection is worth one point.",
              "Answer area"
          ],
          "CorrectAnswer": [
              false,
      true,
      false
          ],
          "Details": [
              "Box 1: No -",
      "You cannot add physical servers to the public cloud. You can only deploy virtual servers in the public cloud. You can extend a private cloud by deploying virtual servers in a public cloud. This would create a hybrid cloud.",
      "Box 2: Yes -",
      "A hybrid cloud is a combination of a private cloud and public cloud. Therefore, to create a hybrid cloud, you must deploy resources to a public cloud.",
      "Box 3: No.",
      "It is not true that a private cloud must be disconnected from the Internet. Private clouds can be and most commonly are connected to the Internet. ג€Private cloudג€ means that the physical servers are managed by you. It does not mean that it is disconnected from the Internet.",
      "Reference:",
      "https://azure.microsoft.com/en-gb/overview/what-are-private-public-hybrid-clouds/"
          ]
      }
  
},
{
  
      "CreationDate": 22122021,
      "ToughId": 3,
      "SubjectName": "Microsoft Certified: Azure Fundamentals",
      "SubjectId": "Mirosoft_AZ900",
      "Organization": "Microsoft",
      "PaperQuesionNo": 103,
      "Question": {
          "AnswerType": "singleCorrect",
          "AnswerOption": [
              "A. hybrid",
              "B. private",
              "C. public",
          ],
          "QuestionText": [
              "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other.",
              "Which type of cloud model is this?"
          ],
          "CorrectAnswer":[ 
          "A hybrid",
        ],
          "Details": [
    "References:",
    "https://azure.microsoft.com/en-gb/overview/what-is-hybrid-cloud-computing/"
          ]
      }
  
}
 ]