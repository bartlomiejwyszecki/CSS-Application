import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeGeneratorComponent } from './shape-generator.component';

describe('ShapeGeneratorComponent', () => {
  let component: ShapeGeneratorComponent;
  let fixture: ComponentFixture<ShapeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
