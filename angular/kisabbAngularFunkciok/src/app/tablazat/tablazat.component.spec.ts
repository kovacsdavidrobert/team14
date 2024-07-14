import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablazatComponent } from './tablazat.component';

describe('TablazatComponent', () => {
  let component: TablazatComponent;
  let fixture: ComponentFixture<TablazatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablazatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablazatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
