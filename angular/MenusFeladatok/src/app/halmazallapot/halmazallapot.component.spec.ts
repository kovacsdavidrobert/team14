import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalmazallapotComponent } from './halmazallapot.component';

describe('HalmazallapotComponent', () => {
  let component: HalmazallapotComponent;
  let fixture: ComponentFixture<HalmazallapotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalmazallapotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalmazallapotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
