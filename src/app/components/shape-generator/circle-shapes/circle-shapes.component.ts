import { Component } from '@angular/core';
import { COLORS } from '../../assets/colors';

@Component({
  selector: 'app-circle-shapes',
  templateUrl: './circle-shapes.component.html',
  styleUrls: ['./circle-shapes.component.scss']
})
export class CircleShapesComponent {
  
  //Basics
  background = '#3d5afe';
  width = 300;
  height = 300;
  colors: string[] = COLORS;

  //Shape ranges
  topLeftRadius = 0;
  topRightRadius = 0;
  bottomRightRadius = 0;
  bottomLeftRadius = 0;

  //Boxshadow ranges
  verticalOffset = 0;
  horizontalOffset = 0;
  blur = 0;
  spread = 0;
  shadowColor = '#212121';

  //togglers
  bordersToggle = true;
  boxshadowToggle = true;
  basicsToggle = true;
  basicsColorsToggle = true;
  shadowColorToggle = true;

  getShape() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      background: `${this.background}`,
      borderRadius: `${this.topLeftRadius}px ${this.topRightRadius}px ${this.bottomRightRadius}px ${this.bottomLeftRadius}px`,
      boxShadow: `${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor}`
    }
  }
}
