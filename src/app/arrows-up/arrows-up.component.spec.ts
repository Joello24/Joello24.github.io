import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsUpComponent } from './arrows-up.component';

describe('ArrowsUpComponent', () => {
  let component: ArrowsUpComponent;
  let fixture: ComponentFixture<ArrowsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowsUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
