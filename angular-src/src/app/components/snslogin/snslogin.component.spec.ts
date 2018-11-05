import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsloginComponent } from './snslogin.component';

describe('SnsloginComponent', () => {
  let component: SnsloginComponent;
  let fixture: ComponentFixture<SnsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
