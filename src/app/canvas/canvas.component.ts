import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(400, 400);
      };

      s.draw = () => {
        s.background(255);
        s.rect(100, 100, 100, 100);
      };
    }
  }
}
