import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPricesComponent } from './contact-prices.component';

describe('ContactPricesComponent', () => {
  let component: ContactPricesComponent;
  let fixture: ComponentFixture<ContactPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
