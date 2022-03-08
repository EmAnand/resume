import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoverLetterComponent } from './my-cover-letter.component';

describe('MyCoverLetterComponent', () => {
  let component: MyCoverLetterComponent;
  let fixture: ComponentFixture<MyCoverLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoverLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
