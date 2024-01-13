import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: any[] = [
    { question: '1 What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: '2 Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: '3 What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']},
    { question: '4 What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: '5 Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: '6 What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']},
    { question: '7 What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: '8 Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: '7 What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: '8 Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] }
  ];
  getQuestions(){
    return this.questions;
  }
  getQuestion(index: number): any {
    return this.questions[index];
  }
  getTotalQuestions(): number {
    return this.questions.length;
  }
}
