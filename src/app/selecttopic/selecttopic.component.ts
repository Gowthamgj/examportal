
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
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
     this.service.firstchoice = this.question.get('subjects').value;
    this.service.questionPriority.push(this.question.get('subjects').value);
    for (const subject of this.subjectlist) {
      if ( this.service.questionPriority.indexOf(subject) !== 0) {
        this.service.questionPriority.push(subject);
      }
    }
    this.router.navigate(['/test']);
  }

}
