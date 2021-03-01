import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { GradientGeneratorComponent } from '../gradient-generator.component';
import { ColorsService } from '../services/service';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.scss']
})
export class LinearComponent {
  colors = this.colorsService.colors;
  color1 = '#ff0000';
  color2 = '#ff0000';

  constructor(private colorsService: ColorsService ) { }

  getGradient() {
    return {
      backgroundImage: `linear-gradient(${this.color1}, ${this.color2})`
    }
  }

  add() {
    this.colorsService.addColor('#e1234e');
  }

  delete(index: number) {
    this.colorsService.deleteColor(index);
  }
}
