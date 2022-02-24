import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CheckPasswordDirective } from './login/validaters/passwordValidators.Directive';
import { CheckcontactDirective } from './login/validaters/ContactnoValidator.Directive ';
import { CheckloginNameDirective } from './login/validaters/loginNameValidator.Directive';
import { TermconditionComponent } from './termcondition/termcondition.component';





@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordChangeComponent,
    CheckPasswordDirective,
    CheckcontactDirective,
    CheckloginNameDirective,
    TermconditionComponent,
    


  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LoginModule { }
