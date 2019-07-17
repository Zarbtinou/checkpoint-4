import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationpannelComponent } from './configurationpannel.component';

describe('ConfigurationpannelComponent', () => {
  let component: ConfigurationpannelComponent;
  let fixture: ComponentFixture<ConfigurationpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
