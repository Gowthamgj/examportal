
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
// import { setInterval } from 'timers';
@Component({
  selector: 'app-selecttopic',
  templateUrl: './selecttopic.component.html',
  styleUrls: ['./selecttopic.component.css']
})
export class SelecttopicComponent  {

  subjectlist;
 
  constructor(private service: CommonService , private router: Router) {
  
  this.subjectlist = ['angular', 'react', 'jquery'];
  
  }
  question = new FormGroup({
  'subjects': new FormControl()
  });
   startTest(ev) {
     this.service.totalsec=0;
     console.log(this.service.totalsec);
    var d = new Date();
     this.service.firstchoice = this.question.get('subjects').value;
    this.service.starthour = d.getHours();
    this.service.startminute = d.getMinutes();
    this.service.startsecond = d.getSeconds();
    this.service.questionPriority.push(this.question.get('subjects').value);
    for (const subject of this.subjectlist) {
      if ( this.service.questionPriority.indexOf(subject) !== 0) {
        this.service.questionPriority.push(subject);
      }
    }
    this.router.navigate(['/test']);
   
  }

}
