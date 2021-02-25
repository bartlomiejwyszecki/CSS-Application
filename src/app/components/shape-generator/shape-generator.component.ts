import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-shape-generator',
  templateUrl: './shape-generator.component.html',
  styleUrls: ['./shape-generator.component.scss']
})
export class ShapeGeneratorComponent implements DoCheck {

  //Box show/hide
  firstCheck = true;
  secondCheck = false;

  //Width, height and background
  background = '#3d5afe';
  width = 300;
  height = 300;

  //Shape ranges
  topLeftRadius = 0;
  topRightRadius = 0;
  bottomRightRadius = 0;
  bottomLeftRadius = 0;

  getShape() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      background: `${this.background}`,
      borderRadius: `${this.topLeftRadius}px ${this.topRightRadius}px ${this.bottomRightRadius}px ${this.bottomLeftRadius}px`
    }
  }

  ngDoCheck(): void {
    if (this.secondCheck || !this.firstCheck) {
      this.width = 0;
      this.height = 0;
    }
  }
}
