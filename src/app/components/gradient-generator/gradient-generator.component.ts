import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-generator',
  templateUrl: './gradient-generator.component.html',
  styleUrls: ['./gradient-generator.component.scss']
})
export class GradientGeneratorComponent {
  width = 100;
  height = 75;
  background = 'green';

  getGradient() {
    return {
      background: `${this.background}`
    };
  }
}
