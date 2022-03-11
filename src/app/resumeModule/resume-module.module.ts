import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { NewCoverLetterComponent } from './new-cover-letter/new-cover-letter.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyCoverLetterComponent } from './my-cover-letter/my-cover-letter.component';
import { FullResumeComponent } from './full-resume/full-resume.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyTestsComponent } from './my-tests/my-tests.component';
import { checkEmailValidator } from './validators/EmailValidator.Directive';
import { CheckContactValidator } from './validators/ContactnoValidator.Directive ';





@NgModule({
  declarations: [
    NewCoverLetterComponent,
    MyResumeComponent,
    MyCoverLetterComponent,
    FullResumeComponent,
    MyBlogsComponent,
    MyCertificatesComponent,
    MyTestsComponent,
    checkEmailValidator,
    CheckContactValidator,
    

    
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ]
})
export class ResumeModuleModule { }
