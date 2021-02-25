import { Component, DoCheck } from '@angular/core';
import { Font, FONTS } from './assets/fonts';
import { COLORS, FONTCOLORS } from './assets/colors';

import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-banner-generator',
  templateUrl: './banner-generator.component.html',
  styleUrls: ['./banner-generator.component.scss']
})
export class BannerGeneratorComponent implements DoCheck {

  //Width and height
  width = 500;
  height = 400;

  //Colors variables
  color1 = '#b71c1c'; 
  percentage1 = 0;
  color2 ='#f44336';
  percentage2 = 100;
  
  colors: string[] = COLORS;

  colorsToggler = true;
  colorsToggler2 = true;

  //Font variables
  font = 'Poppins';
  id;
  fontSize = 24;
  fontWeight;
  fontColor = '#eeeeee';

  fonts: Font[] = FONTS;
  fontColors = FONTCOLORS;

  fontColorToggler = true;

  //Methods

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      fontFamily: `${this.font}`,
      fontSize: `${this.fontSize}px`,
      fontWeight: `${this.fontWeight}`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentage1}%, ${this.color2} ${this.percentage2}%)`,
      color: `${this.fontColor}`
    };
  }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }

  ngDoCheck(): void {
    if (this.font) {
      this.id = this.fonts.find(f => f.name === this.font).id;
    }
  }
}
