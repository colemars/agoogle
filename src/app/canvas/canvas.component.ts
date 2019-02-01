import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  p5 : any;
  constructor() {

  }

  ngOnInit() {
    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
      };

      s.draw = () => {
        s.background(51);
      };
    }
    this.p5 = new p5(sketch);
  }
}
