import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

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
  constructor(private service: CommonService,private router: Router) {
    
     const fchoice = this.service.firstchoice;
     console.log(fchoice);
    this.questions = this.service.question[fchoice];
    console.log(this.questions);
    this.sec = this.service.timerSec;
  this.min = this.service.timerMin;
  this.interval=setInterval(()=>{
    this.service.totalsec = this.service.totalsec+1;
    console.log(this.service.totalsec)
    this.service.timerSec=this.service.totalsec%60;
    this.service.timerMin = this.service.totalsec/60;
    this.sec= Math.floor(this.service.timerSec);
    this.min = Math.floor(this.service.timerMin);
  },1000);
  
  }

  ngOnInit() {
  }
  changeQuestion() {
    clearInterval(this.interval);
    this.service.totalsec=0;
    this.service.timerSec=0;
    this.service.timerMin=0;

    var d = new Date();
    this.service.qindex++;
    this.service.endhour = d.getHours();
    this.service.endminute = d.getMinutes();
    this.service.endsecond =  d.getSeconds();
    this.service.hrCorrespondingToQuestion.push((this.service.starthour-this.service.endhour)+':'+ (this.service.endminute - this.service.startminute)+':'+(this.service.endsecond-this.service.startsecond));
    console.log(this.service.questionPriority[this.service.qindex])
    this.questions = this.service.question[this.service.questionPriority[this.service.qindex]];
    d=new Date();
    this.service.starthour= d.getHours();
    this.service.startminute = d.getMinutes();
    this.service.startsecond = d.getSeconds();
    this.interval=setInterval(()=>{
      this.service.totalsec = this.service.totalsec+1;
      console.log(this.service.totalsec)
      this.service.timerSec=this.service.totalsec%60;
      this.service.timerMin = this.service.totalsec/60;
      this.sec= Math.floor(this.service.timerSec);
      this.min = Math.floor(this.service.timerMin);
    },1000);
    
  }
  resultPage(){
    clearInterval(this.interval);    
    var d = new Date();  
    this.service.qindex++;
    this.service.endhour = d.getHours();
    this.service.endminute = d.getMinutes();
    this.service.endsecond =  d.getSeconds();
    this.service.hrCorrespondingToQuestion.push((this.service.starthour-this.service.endhour)+':'+ (this.service.endminute - this.service.startminute)+':'+(this.service.endsecond-this.service.startsecond));
    console.log(this.service.questionPriority[this.service.qindex])
    for(var i=0;i<this.service.questionPriority.length;i++){
      this.service.subwithtime.push({'coursename':this.service.questionPriority[i],'time':this.service.hrCorrespondingToQuestion[i]});
    }
    this.router.navigate(['/result'])
  }
}
