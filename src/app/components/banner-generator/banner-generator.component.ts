import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Font, FONTS } from './assets/fonts';

@Component({
  selector: 'app-banner-generator',
  templateUrl: './banner-generator.component.html',
  styleUrls: ['./banner-generator.component.scss']
})
export class BannerGeneratorComponent implements DoCheck {
  width = 300;
  height = 200;
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
      fontWeight: `${this.fontWeight}`
    };
  }

  ngDoCheck(): void {
    if (this.font) {
      this.id = this.fonts.find(f => f.name === this.font).id;
    }
  }
}
