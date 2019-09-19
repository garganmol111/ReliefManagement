import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoContactComponent } from './ngo-contact.component';

describe('NgoContactComponent', () => {
  let component: NgoContactComponent;
  let fixture: ComponentFixture<NgoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
