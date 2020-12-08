import { Component, OnInit } from '@angular/core';
import * as data from './trivia.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  questions: any = (data as any).default;
  current: number = 0;

  // store both on new memory object
  answerCorrect: boolean;
  answerPreselected: string = "";
  answerSubmitted: boolean = false;
  score = 0


  ngOnInit() {
    // load questions from api if necessary
  }

  onSelect(choice: string) {
    this.answerPreselected = choice;
  }

  onSubmit() {
    if (this.answerPreselected.length !== 1) {
      return;
    }
    if (this.answerPreselected !== this.questions[this.current].answer) {
      this.answerCorrect = false;
    } else {
      this.answerCorrect = true;
    }
    this.answerSubmitted = true;
  }

  goToNextQuestion() {
    this.current++;
    this.answerPreselected = "";
    this.answerSubmitted = false;
  }
}
