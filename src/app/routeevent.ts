
import { Route } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { SelecttopicComponent } from './selecttopic/selecttopic.component';
export const route: Route[]  = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '',
        component: SelecttopicComponent
    }

];
