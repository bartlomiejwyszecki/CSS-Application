import { Component } from '@angular/core';
import { COLORS } from './../../assets/colors';

@Component({
  selector: 'app-triangle-shapes',
  templateUrl: './triangle-shapes.component.html',
  styleUrls: ['./triangle-shapes.component.scss']
})
export class TriangleShapesComponent {
  //Basics
  background = '#3d5afe';
  width = 0;
  height = 0;
  colors: string[] = COLORS;

  //Shape ranges
  leftBorder = 200;
  rightBorder = 200;
  bottomBorder = 300;

  //Boxshadow ranges
  verticalOffset = 0;
  horizontalOffset = 0;
  blur = 0;
  spread = 0;
  shadowColor = '#212121';

  //Transform
  rotate = 0;
  skewX = 0;
  skewY = 0;

  //togglers
  bordersToggle = true;
  boxshadowToggle = true;
  colorsToggle = true;
  shadowColorToggle = true;
  transformToggle = true;

  getShape() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      borderLeft: `${this.leftBorder}px solid transparent`,
      borderRight: `${this.rightBorder}px solid transparent`,
      borderBottom: `${this.bottomBorder}px solid ${this.background}`,
      boxShadow: `${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor}`,
      transform: `rotate(${this.rotate}deg) skewX(${this.skewX}deg) skewY(${this.skewY}deg)`
    }
  }
}
