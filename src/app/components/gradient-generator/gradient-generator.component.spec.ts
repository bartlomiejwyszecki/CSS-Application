import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientGeneratorComponent } from './gradient-generator.component';

describe('GradientGeneratorComponent', () => {
  let component: GradientGeneratorComponent;
  let fixture: ComponentFixture<GradientGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
