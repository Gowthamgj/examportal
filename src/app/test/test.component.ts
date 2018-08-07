import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions;
  constructor(private service: CommonService) {
     const fchoice = this.service.firstchoice;
     console.log(fchoice);
    this.questions = this.service.question[fchoice];
    console.log(this.questions);
  }

  ngOnInit() {
  }
  changeQuestion() {
    this.service.qindex++;
    console.log(this.service.questionPriority[this.service.qindex])
    this.questions = this.service.question[this.service.questionPriority[this.service.qindex]];
  }
}
