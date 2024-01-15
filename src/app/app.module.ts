import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import{CountdownModule} from 'ngx-countdown';
import { InstructionsComponent } from './instructions/instructions.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component'
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AvailableTestsComponent } from './available-tests/available-tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { QuestionService } from './services/question.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    InstructionsComponent,
    TestPageComponent,
    AdminDashboardComponent,
    NewUserFormComponent,
    NavbarComponent,
    AvailableTestsComponent,
    CandidateLoginComponent,
    UserLoginComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule,MatToolbarModule, MatTooltipModule,
    MatCardModule,MatRadioModule
  ],
  providers: [AuthService, AuthGuardService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
