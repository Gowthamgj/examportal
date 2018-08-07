import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { route } from './routeevent';
import { SelecttopicComponent } from './selecttopic/selecttopic.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SelecttopicComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
