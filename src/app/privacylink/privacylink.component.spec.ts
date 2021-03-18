import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacylinkComponent } from './privacylink.component';

describe('PrivacylinkComponent', () => {
  let component: PrivacylinkComponent;
  let fixture: ComponentFixture<PrivacylinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacylinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacylinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
