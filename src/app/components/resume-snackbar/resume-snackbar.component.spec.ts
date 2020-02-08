import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSnackbarComponent } from './resume-snackbar.component';

describe('ResumeSnackbarComponent', () => {
  let component: ResumeSnackbarComponent;
  let fixture: ComponentFixture<ResumeSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
