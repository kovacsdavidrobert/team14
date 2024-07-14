import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeglalapComponent } from './teglalap.component';

describe('TeglalapComponent', () => {
  let component: TeglalapComponent;
  let fixture: ComponentFixture<TeglalapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeglalapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeglalapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
