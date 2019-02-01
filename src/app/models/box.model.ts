import * as Matter from 'matter-js';
import * as p5 from 'p5';

export class Box {
  [x: string]: any;
  constructor(x, y, w, h, world) {
    this.w = w;
    this.h = h;
    this.body = Matter.Bodies.rectangle(x,y,w,h)
    Matter.World.add(world, this.body);

  }

  show(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;

       p5.push();
       p5.translate(pos.x, pos.y);
       p5.rect(0,0, this.w, this.h);
       p5.pop();


  }

}
