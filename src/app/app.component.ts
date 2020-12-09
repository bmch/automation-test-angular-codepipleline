import { Component, OnInit } from '@angular/core';
import * as data from './trivia.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  questions: any = (data as any).default;
  current: number = 9;

  score = 0
  incorrect = 0;
  displayFinalScore = false;

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
      this.incorrect++;
    } else {
      this.score++
      this.questions[this.current].answerCorrect = true;
    }
    this.questions[this.current].answerSubmitted = true;
    if (this.current == this.questions.length - 1) {
      //display final score 
      this.displayFinalScore = true;
      console.log('finished display score')
    }

  }

  goToNextQuestion() {
    this.current++;
  }

  goToPreviousQuestion() {
    this.current--;
  }
}
