import { Injectable } from '@angular/core';
import { ColorItem } from './types';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  public colors: ColorItem[] = [
    { name: '#000000',
      percentage: 100 }
  ];

  public full: boolean = false;

  constructor() { }

  addColor(colorName: string) {
      if (this.colors.length < 9) {
        this.colors.push({
        name: colorName,
        percentage: 100
      });
    } else {
      this.full = !this.full;
    }
  }
  
  deleteColor(index: number) {
    this.colors.splice(index-1, 1);
  }
}

