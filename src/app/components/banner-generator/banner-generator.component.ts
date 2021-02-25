import { Component, DoCheck } from '@angular/core';
import { Font, FONTS } from './assets/fonts';
import { COLORS } from './assets/colors';

@Component({
  selector: 'app-banner-generator',
  templateUrl: './banner-generator.component.html',
  styleUrls: ['./banner-generator.component.scss']
})
export class BannerGeneratorComponent implements DoCheck {

  //Width and height
  width = 300;
  height = 200;

  //Colors variables
  color1 = '#d81b60';
  percentage1 = 0;
  color2 = '#c62828';
  percentage2 = 100;
  
  colors: string[] = COLORS;

  colorsToggler = true;
  colorsToggler2 = true;

  //Font variables
  font;
  id;
  fontSize = 24;
  fontWeight;

  fonts: Font[] = FONTS;

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      fontFamily: `${this.font}`,
      fontSize: `${this.fontSize}px`,
      fontWeight: `${this.fontWeight}`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentage1}%, ${this.color2} ${this.percentage2}%)`
    };
  }

  ngDoCheck(): void {
    if (this.font) {
      this.id = this.fonts.find(f => f.name === this.font).id;
    }
  } 
}
