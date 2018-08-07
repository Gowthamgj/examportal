import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  firstchoice;
  questionPriority;
  qindex;
  question = {'angular':
  [{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name': 1
},
{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name' : 2
},
{ 'question' : 'What is Model in MVC?',
  'answer': ['Model is the lowest level of the pattern responsible for maintaining data',
  ' Model represents data stored in database',
  ' Model represents server side data'],
  'name' : 3
},
],
'react':
  [{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  'Inside vendor/components/',
  ' Model represents server side data'],
  'name': 1
},
{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  ' Inside vendor/components/',
  ' Model represents server side data'],
  'name' : 2
},
{ 'question' : 'In which directory React Components are saved?',
  'answer': ['Inside js/components/',
  ' Inside vendor/components/',
  ' Model represents server side data'],
  'name' : 3
},
],
'jquery':
  [{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
  'answer': ['the $ sign',
  ' the ? Sign',
  ' the % sign'],
  'name': 1
},
{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
  'answer': ['the $ sign',
  ' the ? Sign',
  ' the % sign'],
  'name': 1
},
{ 'question' : 'Which sign does jQuery use as a shortcut for jQuery?',
'answer': ['the $ sign',
' the ? Sign',
' the % sign'],
'name': 1
},
],

  };
  constructor() {
    this.questionPriority = [];
    this.qindex = 0;
   }

}
