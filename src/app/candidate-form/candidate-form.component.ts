import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.scss'
})
export class CandidateFormComponent {
  //  @Input()
  name!: string;

//  @Input()
 phoneNumber!:string;

//  @Input()
 email!:string;

//  @Input()
//  experience!:number;
// candidateForm= true;

 

  onSubmit() {
    console.log('submitted');
    //  this.candidateForm=false;
  }

  
}
