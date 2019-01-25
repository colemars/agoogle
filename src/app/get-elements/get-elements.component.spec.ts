import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetElementsComponent } from './get-elements.component';

describe('GetElementsComponent', () => {
  let component: GetElementsComponent;
  let fixture: ComponentFixture<GetElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
