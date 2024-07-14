import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParosparatlanComponent } from './parosparatlan.component';

describe('ParosparatlanComponent', () => {
  let component: ParosparatlanComponent;
  let fixture: ComponentFixture<ParosparatlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParosparatlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParosparatlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
