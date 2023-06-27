import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiewsdetailsPage } from './niewsdetails.page';

describe('NiewsdetailsPage', () => {
  let component: NiewsdetailsPage;
  let fixture: ComponentFixture<NiewsdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NiewsdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
