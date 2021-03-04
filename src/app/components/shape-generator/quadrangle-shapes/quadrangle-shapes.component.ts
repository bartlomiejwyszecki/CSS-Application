import { Component } from '@angular/core';
import { COLORS } from './../../../assets/colors';

@Component({
  selector: 'app-quadrangle-shapes',
  templateUrl: './quadrangle-shapes.component.html',
  styleUrls: ['./quadrangle-shapes.component.scss']
})
export class QuadrangleShapesComponent {
  //Basics
  background = '#3d5afe';
  width = 350;
  height = 0;
  colors: string[] = COLORS;

  //Shape ranges
  leftBorder = 90;
  rightBorder = 90;
  bottomBorder = 200;

  //Boxshadow ranges
  verticalOffset = 0;
  horizontalOffset = 0;
  blur = 0;
  shadowColor = '#9e9e9e';

  //Transform
  rotate = 0;
  skewX = 0;
  skewY = 0;

  //togglers
  basicsToggle = true;
  basicsColorsToggle = true;
  bordersToggle = true;
  boxshadowToggle = true;
  shadowColorToggle = true;
  transformToggle = true;

  getShape() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      borderLeft: `${this.leftBorder}px solid transparent`,
      borderRight: `${this.rightBorder}px solid transparent`,
      borderBottom: `${this.bottomBorder}px solid ${this.background}`,
      filter: `drop-shadow(${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.shadowColor})`,
      transform: `rotate(${this.rotate}deg) skewX(${this.skewX}deg) skewY(${this.skewY}deg)`
    }
  }
}
