import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { PracticeTestComponent } from './practice-test/practice-test.component';





const routes: Routes = [
  
  
  {path:'contact', component:ContactComponent},
  
  {path:'about', component:AboutComponent},
  {path:'my-home',component:HomeComponent},
  {path:'home', component:HomeComponent},
  
  
{path:"interview-question-answers",component:InterviewsComponent},
{path:"practice-test",component:PracticeTestComponent},
  //{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'', component:HomeComponent},


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
