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
  
  constructor(private service: CommonService,private router: Router) {
     const fchoice = this.service.firstchoice;
     console.log(fchoice);
    this.questions = this.service.question[fchoice];
    console.log(this.questions);
  }

  ngOnInit() {
  }
  changeQuestion() {
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
  }
  resultPage(){
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
