import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-optional-question',
  templateUrl: './optional-question.component.html',
  styleUrls: ['./optional-question.component.css']
})
export class OptionalQuestionComponent implements OnInit {
@Input() data:any;
  constructor() {
}
az900:any;

 
  ngOnInit(): void {
    //this.learn.exam().subscribe((resource)=>{
      //this.data= resource;
    //   console.log(this.data)
    // })
    
 // this.data=JSON.parse('test.json')
 // console.log(this.data)
  // this.data= result;
  // console.log(this.data.Item)
  
 //console.log(this.data.Question.QuestionText)

  }
  

  IsMultiCorrect(){
  // console.log(this.data.Question.AnswerType== 'MultiCorrect' ? true:false);
    return this.data.Question.AnswerType== 'MultiCorrect' ? true:false;
  
  }
  

   isDisplay =true;
   isAnswerCorrect:boolean = true
   toggleDisplay(){
    this.isDisplay= !this.isDisplay;
    this.isAnswerCorrect=true;
    var abc = [].map.call(document.querySelectorAll('input[name="chkage"]:checked'), function(cb) {
      return Number.parseInt(cb['id']); 
    });
    abc.forEach(val => {
      if(!this.data.Question.CorrectAnswer.includes(val) || !this.isAnswerCorrect){
        this.isAnswerCorrect=false;
        return;
      }
    });
    this.isAnswerCorrect = (this.data.Question.CorrectAnswer.length == abc.length && this.isAnswerCorrect)? true:false;
    //
    //     var ele =(RadioNodeList)document.getElementsByName('age');
              
    //  for(let i = 0; i < ele.length; i++) {
    //      if((radio)ele[i].check)
    //      document.getElementById("result").innerHTML
    //              = "Gender: "+ele[i].value;
    //  }
    
         // document.getElementsByName('age').innerHTML = "";
            // var ele = document.getElementsByName('input');
              
            // for(let i = 0; i < ele.length; i++) {
                  
            //     if(ele[i].type="radio") {
                  
            //         if(ele[i].checked)
            //             document.getElementsByName("age1").innerHTML
            //                     += ele[i].name + " Value: "
            //                     + ele[i].value + "<br>";
            //     }
            // }
     
            //var selectedOption = $("input:radio[name=option]:checked").val()

//             var ele = document.getElementsByName('age1');
//           var rate_value;
//           for(var i = 0; i < ele.length; i++){
//           if(ele[i].checked){
//           rate_value = ele[i].id;
//     }
// }
  }

  
}


 var result=[{
  "Item": {
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
          "CorrectAnswer": [
              2,
              3,
              4,
              5
          ],
          "Details": [
              "https://azure.microsoft.com/en-us/support/plans/"
          ]
      },
      "Organization": "Microsoft",
      "PaperQuesionNo": 101
  }
},

{
  "Item": {
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
  }
},

{
  "Item": {
      "CreationDate": 22122021,
      "ToughId": 4,
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
          "CorrectAnswer": 1,
          "Details": [
    "References:",
    "https://azure.microsoft.com/en-gb/overview/what-is-hybrid-cloud-computing/"
          ]
      }
  }
}
 ]