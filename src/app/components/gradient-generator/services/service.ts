import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  public colors = [
    '', '#0000fg', '#0000ff', '#212121'
  ];

  constructor() { }

  addColor(colorName: string) {
    this.colors.push(colorName);
  }
  
  deleteColor(index: number) {
    this.colors.splice(index, 1);
  }
}

