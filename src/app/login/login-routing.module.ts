import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TermconditionComponent } from './termcondition/termcondition.component';




const routes: Routes = [
  
  {path:'register', component:RegisterComponent},
  
  {path :'login', component: LoginComponent},
  {path:'reset' , component:PasswordChangeComponent},
  {path: 'terms', component:TermconditionComponent},
  {path:'profile', component:ProfileComponent}
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
