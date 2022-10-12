import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutaddressComponent } from './chechoutaddress.component';

describe('ChechoutaddressComponent', () => {
  let component: ChechoutaddressComponent;
  let fixture: ComponentFixture<ChechoutaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechoutaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
