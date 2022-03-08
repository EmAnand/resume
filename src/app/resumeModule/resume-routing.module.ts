import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { FullResumeComponent } from './full-resume/full-resume.component';
import { LanguageComponent } from './language/language.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyCoverLetterComponent } from './my-cover-letter/my-cover-letter.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyTestsComponent } from './my-tests/my-tests.component';
import { NewCoverLetterComponent } from './new-cover-letter/new-cover-letter.component';
import { NewResumeComponent } from './new-resume/new-resume.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { QualificationComponent } from './qualification/qualification.component';





const routes: Routes = [
  {path:'new-cover-letter',component:NewCoverLetterComponent},
  {path:'my-cover-letters',component:MyCoverLetterComponent},
  {path:'full-resume',component:FullResumeComponent},
  {path:'my-resumes',component:MyResumeComponent},
  {path:'my-blogs',component:MyBlogsComponent},
  {path:'my-certificates',component:MyCertificatesComponent},
  {path:'my-tests',component:MyTestsComponent},
  {path:'new-resume', component:NewResumeComponent,children: [
    {
      path: 'personal-info', // child route path
      component: PersonalInfoComponent, // child route component that the router renders
    },
    {
      path: 'qualification',
      component: QualificationComponent, // another child route component that the router renders
    },{
      path: 'experience',
      component: ExperienceComponent, // another child route component that the router renders
    },{
      path: 'language',
      component: LanguageComponent, // another child route component that the router renders
    },
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
