import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFromComponent } from './book-from.component';

describe('BookFromComponent', () => {
  let component: BookFromComponent;
  let fixture: ComponentFixture<BookFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
