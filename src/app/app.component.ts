import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CandidateView';
  showInstructions = true;

  proceed()
  {
    this.showInstructions=false;
  }
}
