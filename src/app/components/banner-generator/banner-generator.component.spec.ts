import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGeneratorComponent } from './banner-generator.component';

describe('BannerGeneratorComponent', () => {
  let component: BannerGeneratorComponent;
  let fixture: ComponentFixture<BannerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
