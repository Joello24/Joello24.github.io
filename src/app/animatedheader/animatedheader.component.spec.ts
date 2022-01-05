import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedheaderComponent } from './animatedheader.component';

describe('AnimatedheaderComponent', () => {
  let component: AnimatedheaderComponent;
  let fixture: ComponentFixture<AnimatedheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
