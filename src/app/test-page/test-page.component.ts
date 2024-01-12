import { Component } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  currentIndex = 0;
  currentQuestion: any;
  showNextButton = false;
  questions: any;
  questionList = false;
  counter = 0;
  selectedOption: string | null = null;
  onSubmit() {
    this.questionList = true;
  }

  constructor(private questionService: QuestionService) { }
  ngOnInit(): void {
    this.loadQuestion();
  }
  loadQuestion(): void {
    this.currentQuestion = this.questionService.getQuestion(this.currentIndex);
    this.showNextButton = false;
  }

  onNextClick(): void {
    if (this.currentIndex < this.questionService.getTotalQuestions()) {
      this.currentIndex++;
      this.counter++;
      if (this.currentIndex < this.questionService.getTotalQuestions()) {
        this.loadQuestion();
      } else {
        console.log('End of questions');
      }
    } else {
      console.log('reached');
    }
    console.log(this.selectedOption);
    this.selectedOption = null; 
  }
}
