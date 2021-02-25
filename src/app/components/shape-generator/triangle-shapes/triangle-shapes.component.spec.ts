import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleShapesComponent } from './triangle-shapes.component';

describe('TriangleShapesComponent', () => {
  let component: TriangleShapesComponent;
  let fixture: ComponentFixture<TriangleShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangleShapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
