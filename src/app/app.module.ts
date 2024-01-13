import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuestionListComponent } from './questionlist/questionlist.component';
import{CountdownModule} from 'ngx-countdown';
import { InstructionsComponent } from './instructions/instructions.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component'
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AvailableTestsComponent } from './available-tests/available-tests.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    QuestionListComponent,
    InstructionsComponent,
    TestPageComponent,
    AdminDashboardComponent,
    NewUserFormComponent,
    NavbarComponent,
    AvailableTestsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
