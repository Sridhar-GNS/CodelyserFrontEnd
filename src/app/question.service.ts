import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: any[] = [
    { question: 'What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: 'Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']},
    { question: 'What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: 'Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']},
    { question: 'What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: 'Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']},
    { question: 'What is your name?', options: ['John', 'Jane', 'Alex', 'Other'] },
    { question: 'Where are you from?', options: ['USA', 'Canada', 'UK', 'Other'] },
    { question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Other']}
  ];
  getQuestion(index: number): any {
    return this.questions[index];
  }
  getTotalQuestions(): number {
    return this.questions.length;
  }
}