import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoloComponent } from './logolo.component';

describe('LogoloComponent', () => {
  let component: LogoloComponent;
  let fixture: ComponentFixture<LogoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
