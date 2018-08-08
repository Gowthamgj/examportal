import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Http } from '@angular/http';

@Injectable()
export class CommonService {
  firstchoice;
  questionPriority;
  secCorrespondingToQuestion;
  hrCorrespondingToQuestion;
  minCorrespondingToQuestion;
  subwithtime;
  qindex;
  totalsec;
  timerSec;
  timerMin;
  timerHr;
  url;
  question;
  constructor(private http: Http) {
    this.questionPriority = [];
    this.url = 'file:///C:/Users/gowthamrajs/Desktop/examportal/src/app/question.json';
    this.minCorrespondingToQuestion = [];
    this.secCorrespondingToQuestion = [];
    this.hrCorrespondingToQuestion = [];
    this.subwithtime = [];
    this.qindex = 0;
    this.totalsec = 0;
    this.timerMin = 0;
    this.timerSec = 0;
    this.getQuestion();
    console.log(this.totalsec);
   }
   getQuestion() {
     this.http.get(this.url)
     .subscribe((res) => {
       console.log(res.json());
     });
   }
   increaseTime() {
      this.totalsec = this.totalsec + 1;
      console.log(this.totalsec);
                 this.timerSec = this.totalsec % 60;
      this.timerMin = this.totalsec / 60;
      // console.log(this.timerSec,this.timerMin)
   }
}
