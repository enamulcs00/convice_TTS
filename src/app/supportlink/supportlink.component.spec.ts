import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportlinkComponent } from './supportlink.component';

describe('SupportlinkComponent', () => {
  let component: SupportlinkComponent;
  let fixture: ComponentFixture<SupportlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
