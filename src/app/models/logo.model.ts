import * as Matter from 'matter-js';
import * as p5 from 'p5';
// import * as p from '@types/p5';
/// <reference path="../node_modules/@types/p5/index.d.ts"/>

export class Logo {
  [x: string]: any;
  constructor(x, y, w, h, img, world) {
    this.w = w;
    this.h = h;
    this.img = img;
    this.body = Matter.Bodies.rectangle(x,y,w,h)
    Matter.World.add(world, this.body);

  }

  show(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;

       p5.push();
       p5.translate(pos.x, pos.y);
       p5.rotate(angle);
       p5.rectMode(p5.CENTER);
       p5.imageMode(p5.CENTER);
       // p5.rect(0,0, this.w, this.h);
       p5.image(this.img, 0, 0, this.w, this.h);
       p5.pop();


  }

}
