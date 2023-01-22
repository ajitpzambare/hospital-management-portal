import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListViewComponent } from './doctors-list-view.component';

describe('DoctorsListViewComponent', () => {
  let component: DoctorsListViewComponent;
  let fixture: ComponentFixture<DoctorsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
