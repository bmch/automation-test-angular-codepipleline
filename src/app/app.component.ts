import { Component, OnInit } from '@angular/core';
import * as data from './trivia.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trivia';
  questions: any = (data as any).default;
  current: number = 0;
  answerCorrect: boolean;
  answerPicked: boolean = false;
  score = 0

  ngOnInit() {
    console.log('questions - ', this.questions)
  }

  onSelect(choice: string) {

    if (choice !== this.questions[this.current].answer) {
      this.answerCorrect = false;
    } else {
      this.answerCorrect = true;
    }
    this.answerPicked = true;
  }


  goToNextQuestion() {
    this.current++;
    this.answerPicked = false;
  }
}
