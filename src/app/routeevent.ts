
import { Route } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { SelecttopicComponent } from './selecttopic/selecttopic.component';
import { ResultComponent } from './result/result.component';
export const route: Route[]  = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'result',
        component : ResultComponent
    },
    {
        path: '',
        component: SelecttopicComponent
    }

];
