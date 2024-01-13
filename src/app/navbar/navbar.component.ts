import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentIndex: number = 0;
    @Output() navigateToQuestion = new EventEmitter<number>();

    questions: number[] = [];
    constructor(private questionService: QuestionService) { }
    ngOnChanges() {
        this.questions = Array.from({ length: this.questionService.getTotalQuestions() }, (_, i) => i);
    }

    goToQuestion(index: number) {
        this.navigateToQuestion.emit(index);
    }

}
