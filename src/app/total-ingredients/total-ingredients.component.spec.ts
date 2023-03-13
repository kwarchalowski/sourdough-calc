import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalIngredientsComponent } from './total-ingredients.component';

describe('TotalIngredientsComponent', () => {
  let component: TotalIngredientsComponent;
  let fixture: ComponentFixture<TotalIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
