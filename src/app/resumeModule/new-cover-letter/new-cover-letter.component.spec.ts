import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverLetterComponent } from './new-cover-letter.component';

describe('NewCoverLetterComponent', () => {
  let component: NewCoverLetterComponent;
  let fixture: ComponentFixture<NewCoverLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoverLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
