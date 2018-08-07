import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttopicComponent } from './selecttopic.component';

describe('SelecttopicComponent', () => {
  let component: SelecttopicComponent;
  let fixture: ComponentFixture<SelecttopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
