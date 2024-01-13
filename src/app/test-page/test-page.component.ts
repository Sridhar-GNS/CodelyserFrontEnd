import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import {FormGroup } from '@angular/forms';
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent implements OnInit {
  currentIndex = 0;
  questions: any;
  answers:any;
  onSubmit() {
  }

  constructor(private questionService: QuestionService) { }
  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    this.answers = Array.from({ length: this.questions.length }, (_, i) => "");
  }

  onPrevClick(){
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      console.log('reached');
    }
  }
  
  onNextClick(): void {
    if (this.currentIndex < this.questions.length-1) {
      this.currentIndex++;
    } else {
      console.log('reached');
    }
  }

  goToQuestion(index: number) {
    this.currentIndex = index;
  }
  checkIfSelected(){
  }

  isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }
}
