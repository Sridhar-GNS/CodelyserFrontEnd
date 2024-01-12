import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionListComponent } from './questionlist/questionlist.component';
import{CountdownModule} from 'ngx-countdown';
import { InstructionsComponent } from './instructions/instructions.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    QuestionListComponent,
    InstructionsComponent,
    TestPageComponent,
    AdminDashboardComponent,
    NewUserFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
