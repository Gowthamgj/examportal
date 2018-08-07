import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class CommonService {
  firstchoice;
  questionPriority;
  secCorrespondingToQuestion;
  hrCorrespondingToQuestion;
  minCorrespondingToQuestion;
  starthour;
  startminute;
  startsecond;
  endhour;
  subwithtime;
  endminute;
  endsecond;
  qindex;
  question = {'angular':
  [{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name': 1,
  'option': 'a',
  'crctansweroption':'a'
  
},
{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name' : 2,
  'option': 'b',
  'crctansweroption':'a'
  
  
},
{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name' : 3,
  'option': 'c',
  'crctansweroption':'a'
  
},
],
'react':
  [{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  'Inside vendor/components/',
  ' Model represents server side data'],
  'name': 1,
  'option': 'a',
  'crctansweroption':'a'
  
  
},
{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  ' Inside vendor/components/',
  ' Model represents server side data'],
  'name' : 2,
  'option': 'b',
  'crctansweroption':'a'
  
  
},
{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  ' Inside vendor/components/',
  ' Model represents server side data'],
  'name' : 3,
  'option': 'c',
  'crctansweroption':'a'
  
  
},
],
'jquery':
  [{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
  'answer': ['the $ sign',
  ' the ? Sign',
  ' the % sign'],
  'name': 1,
  'option': 'a',
  'crctansweroption':'a'  
},
{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
  'answer': ['the $ sign',
  ' the ? Sign',
  ' the % sign'],
  'name': 1,
  'option': 'b',
  'crctansweroption':'a'  
},
{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
'answer': ['the $ sign',
' the ? Sign',
' the % sign'],
'name': 1,
'option': 'c',
'crctansweroption':'a'
},
],

  };
  constructor() {
    this.questionPriority = [];
    this.minCorrespondingToQuestion = [];
    this.secCorrespondingToQuestion = [];
    this.hrCorrespondingToQuestion = [];
    this.subwithtime = [];
    this.qindex = 0;
   }

}
