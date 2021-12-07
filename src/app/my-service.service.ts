import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  name: string;

  constructor() {
    this.name = 'yinshuxun3';
  }

  setName(){
    this.name  = 'yinshuxun4'
  }
}
