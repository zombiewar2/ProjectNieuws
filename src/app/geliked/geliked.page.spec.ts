import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GelikedPage } from './geliked.page';

describe('GelikedPage', () => {
  let component: GelikedPage;
  let fixture: ComponentFixture<GelikedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GelikedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
