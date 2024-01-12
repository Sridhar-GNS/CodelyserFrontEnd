import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/instructions', pathMatch: 'full' },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'fill-form', component: CandidateFormComponent },
  { path: 'testPage', component: TestPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
