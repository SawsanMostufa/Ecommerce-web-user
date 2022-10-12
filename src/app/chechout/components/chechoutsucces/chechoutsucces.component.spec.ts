import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutsuccesComponent } from './chechoutsucces.component';

describe('ChechoutsuccesComponent', () => {
  let component: ChechoutsuccesComponent;
  let fixture: ComponentFixture<ChechoutsuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechoutsuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
