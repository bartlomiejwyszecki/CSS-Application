import { Component, DoCheck } from '@angular/core';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { GradientGeneratorComponent } from '../gradient-generator.component';
import { ColorsService } from '../services/service';
import { ColorItem } from '../services/types';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.scss']
})
export class LinearComponent implements DoCheck {
  colors: ColorItem[] = this.colorsService.colors;
  initialColors: ColorItem[] = [
    { name: '#ff7b00', percentage: 25 },
    { name: '#e90152', percentage: 90 }
  ];
  rotation: number = 180;
  check: boolean = true;
  disableAdd: boolean;
  code;

  constructor(private colorsService: ColorsService ) { }

  getGradient() {
    let str = '';
    for (let i = 0; i < this.colors.length; i++) {
      str += `, ${this.colors[i].name} ${this.colors[i].percentage}%`;
    }
    let obj = {
      backgroundImage: `linear-gradient(${this.rotation}deg, ${this.initialColors[0].name} ${this.initialColors[0].percentage}%, 
        ${this.initialColors[1].name} ${this.initialColors[1].percentage}%` + str + `)`
    };
    this.code = obj;
    return obj;
  }

  getRotation() {
    return {
      transform: `rotate(${this.rotation}deg)`
    }
  }

  add() {
    this.disableAdd ? alert("You can't add more colors. Maximum number is 10.") : this.colorsService.addColor('#016B7E');
  }

  delete(index: number) {
    this.colorsService.deleteColor(index);
  }

  ngDoCheck() {
    this.colorsService.colors.length >= 8 ? this.disableAdd = true : this.disableAdd = false;
  }
}
