import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDoughComponent } from './main-dough.component';

describe('MainDoughComponent', () => {
  let component: MainDoughComponent;
  let fixture: ComponentFixture<MainDoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDoughComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
