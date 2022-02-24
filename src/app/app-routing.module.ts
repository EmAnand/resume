import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExaminationComponent } from './examination/examination.component';
import { ExamsComponent } from './exams/exams.component';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { PracticeTestComponent } from './practice-test/practice-test.component';
import { StatementQuestionComponent } from './statement-question/statement-question.component';


const routes: Routes = [
  
  
  {path:'contact', component:ContactComponent},
  
  {path:'about', component:AboutComponent},
  {path:'my-home',component:HomeComponent},
  {path:'home', component:HomeComponent},
  
  {path:'myhome', component:MyHomeComponent},
  
{ path: 'exams',component: ExamsComponent}, 
{ path: "exam/:id", component: ExaminationComponent},
{path:"interview-question-answers",component:InterviewsComponent},
{path:"practice-test",component:PracticeTestComponent},
//{path:"exam", component:StatementQuestionComponent},
  //{path: 'items', loadChildren: () => import('../').then(m => m.ItemsModule)},
  
  {path:'', component:HomeComponent},


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
