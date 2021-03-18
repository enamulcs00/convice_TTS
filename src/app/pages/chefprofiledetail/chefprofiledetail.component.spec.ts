import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefprofiledetailComponent } from './chefprofiledetail.component';

describe('chefprofiledetailComponent', () => {
  let component: ChefprofiledetailComponent;
  let fixture: ComponentFixture<ChefprofiledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefprofiledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefprofiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
