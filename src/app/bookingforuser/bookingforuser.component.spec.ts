import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingforuserComponent } from './bookingforuser.component';

describe('BookingforuserComponent', () => {
  let component: BookingforuserComponent;
  let fixture: ComponentFixture<BookingforuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingforuserComponent]
    });
    fixture = TestBed.createComponent(BookingforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
