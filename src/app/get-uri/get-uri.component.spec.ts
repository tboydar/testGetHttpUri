import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUriComponent } from './get-uri.component';

describe('GetUriComponent', () => {
  let component: GetUriComponent;
  let fixture: ComponentFixture<GetUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
