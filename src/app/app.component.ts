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
    this.questions[this.current].answerPreselected = choice;
  }

  onSubmit() {
    if (this.questions[this.current].answerPreselected.length !== 1) {
      return;
    }
    if (this.questions[this.current].answerPreselected !== this.questions[this.current].answer) {
      this.questions[this.current].answerCorrect = false;
    } else {
      this.questions[this.current].answerCorrect = true;
    }
    this.questions[this.current].answerSubmitted = true;
  }

  goToNextQuestion() {
    this.current++;
  }

  goToPreviousQuestion() {
    this.current--;
  }
}
