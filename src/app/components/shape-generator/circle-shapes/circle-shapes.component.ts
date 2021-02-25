import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-shapes',
  templateUrl: './circle-shapes.component.html',
  styleUrls: ['./circle-shapes.component.scss']
})
export class CircleShapesComponent {
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
}
