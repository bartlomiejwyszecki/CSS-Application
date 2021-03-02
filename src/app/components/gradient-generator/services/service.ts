import { Injectable } from '@angular/core';
import { ColorItem } from './types';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  public colors: ColorItem[] = [
  ];

  public count = 0;

  constructor() { }

  addColor(colorName: string) {
    this.colors.push({
      name: colorName,
      percentage: 100
    });
  }
  
  deleteColor(index: number) {
    this.colors.splice(index, 1);
  }
}

