import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { GradientGeneratorComponent } from '../gradient-generator.component';
import { ColorsService } from '../services/service';
import { ColorItem } from '../services/types';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.scss']
})
export class LinearComponent {
  colors: ColorItem[] = this.colorsService.colors;
  initialColors: ColorItem[] = [
    { name: '#ff7b00', percentage: 25 },
    { name: '#e90152', percentage: 90 }
  ];
  rotation: number = 180;
  check: boolean = true;
  code: string = '';

  constructor(private colorsService: ColorsService ) { }

  getGradient() {
    let str = '';
    for (let i = 0; i < this.colors.length-1; i++) {
      str += `, ${this.colors[i].name}`;
      this.code += `, ${this.colors[i].name}`;
    }
    let obj = {
      backgroundImage: `linear-gradient(${this.rotation}deg, ${this.initialColors[0].name} ${this.initialColors[0].percentage}%, 
        ${this.initialColors[1].name} ${this.initialColors[1].percentage}%` + str + `)`
    };
    return obj;
  }

  getRotation() {
    return {
      transform: `rotate(${this.rotation}deg)`
    }
  }

  add() {
    this.colorsService.addColor('#016B7E');
  }

  delete(index: number) {
    this.colorsService.deleteColor(index);
  }
}
