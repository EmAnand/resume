import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyvalueQuestionComponent } from './keyvalue-question/keyvalue-question.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { PracticeTestComponent } from './practice-test/practice-test.component';
import { PersonalInfoComponent } from './resumeModule/personal-info/personal-info.component';
import { LanguageComponent } from './resumeModule/language/language.component';
import { ExperienceComponent } from './resumeModule/experience/experience.component';
import { QualificationComponent } from './resumeModule/qualification/qualification.component';
import { NewResumeComponent } from './resumeModule/new-resume/new-resume.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ResumeModuleModule } from './resumeModule/resume-module.module';
import { ResumeRoutingModule } from './resumeModule/resume-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    KeyvalueQuestionComponent,
    InterviewsComponent,
    PracticeTestComponent,
    PersonalInfoComponent,
    LanguageComponent,
    ExperienceComponent,
    QualificationComponent,
    NewResumeComponent
  ],
  imports: [
    BrowserModule,
    ResumeModuleModule,
    ResumeRoutingModule,
    LoginRoutingModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
