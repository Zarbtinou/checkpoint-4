import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpricesComponent } from './getprices.component';

describe('GetpricesComponent', () => {
  let component: GetpricesComponent;
  let fixture: ComponentFixture<GetpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
