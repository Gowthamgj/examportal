import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions;
  sec;
  min;
  interval;
  subjectname;
  selectedAnswer;
  form:FormGroup;
  constructor(private service: CommonService, private router: Router) {
     const fchoice = this.service.firstchoice;
     this.service.getQuestion();
     console.log(fchoice);
     this.form= new FormGroup({
       "q1":new FormControl('',[]),
       "q2":new FormControl('',[]),
       "q3":new FormControl('',[]),         
     })
     this.subjectname = fchoice;
    //  console.log(this.service.question);
     this.selectedAnswer = {};
    this.questions = this.service.question[fchoice];
    console.log(this.questions);
    this.sec = this.service.timerSec;
  this.min = this.service.timerMin;
  this.interval = setInterval(() => {
    this.service.totalsec = this.service.totalsec + 1;
    console.log(this.service.totalsec);
    this.service.timerSec = this.service.totalsec % 60;
    this.service.timerMin = this.service.totalsec / 60;
    this.sec = Math.floor(this.service.timerSec);
    this.min = Math.floor(this.service.timerMin);
  }, 1000);
  }

  ngOnInit() {
  }
  changeQuestion() {
    console.log(this.form.value);
    this.selectedAnswer[this.subjectname]={'q1':this.form.get('q1').value,'q2':this.form.get('q2').value,'q3':this.form.get('q3').value};
    this.form.get('q1').value='';
    this.form.get('q2').value='';
    this.form.get('q3').value='';
    
    clearInterval(this.interval);
    this.service.hrCorrespondingToQuestion.push(Math.floor(this.service.timerMin) + ':' + this.service.timerSec);
    this.service.totalsec = 0;
    this.service.timerSec = 0;
    this.service.timerMin = 0;
    this.service.qindex++;
    this.subjectname = this.service.questionPriority[this.service.qindex]
    this.questions = this.service.question[this.service.questionPriority[this.service.qindex]];
    this.interval = setInterval(()=>{
    this.service.totalsec = this.service.totalsec+1;
    this.service.timerSec=this.service.totalsec%60;
    this.service.timerMin = this.service.totalsec/60;
    this.sec = Math.floor(this.service.timerSec);
    this.min = Math.floor(this.service.timerMin);
    }, 1000);
  }
  resultPage() {
    clearInterval(this.interval);
    this.selectedAnswer[this.subjectname]={'q1':this.form.get('q1').value,'q2':this.form.get('q2').value,'q3':this.form.get('q3').value};    
    this.service.hrCorrespondingToQuestion.push(Math.floor(this.service.timerMin) + ':' + this.service.timerSec);
    for(var i=0;i<this.service.questionPriority.length;i++){
      this.service.subwithtime.push({'coursename':this.service.questionPriority[i],'time':this.service.hrCorrespondingToQuestion[i]});
    }
    this.router.navigate(['/result']);
    console.log(this.selectedAnswer);
  }
}
