import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentsComponent } from './ferments.component';

describe('FermentsComponent', () => {
  let component: FermentsComponent;
  let fixture: ComponentFixture<FermentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FermentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
