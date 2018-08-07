import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  courseorder;
  hrorder;
  minorder;
  subwithtime;
  secorder;
  constructor(private service : CommonService) { 
    this.courseorder = this.service.questionPriority;
    this.hrorder = this.service.hrCorrespondingToQuestion;
    this.minorder = this.service.minCorrespondingToQuestion;
    this.secorder = this.service.secCorrespondingToQuestion;
    this.subwithtime = this.service.subwithtime;
  }

  ngOnInit() {
  }

}
