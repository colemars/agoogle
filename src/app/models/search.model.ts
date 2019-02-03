import * as Matter from 'matter-js';
import * as p5 from 'p5';

export class Search {
  [x: string]: any;
  constructor(x, y, w, h, world) {
    this.w = w;
    this.h = h;
    this.world = world;
    this.options = {
      friction: 0.3,
      restitution: 0.6,
      isStatic: true,
    }

    this.body = Matter.Bodies.rectangle(x,y,w,h,this.options)
    Matter.World.add(this.world, this.body);

  }

  show(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;
       let input;

       // input = p5.createInput().addClass('search');
       // // s.rectMode(s.CENTER);
       // input.position(p5.width/2-this.width/2, p5.height/3);
       // input.style('width', this.width + 'px');
       // input.style('height', this.height + 'px');


       p5.push();
       // p5.translate(pos.x, pos.y);
       // p5.rotate(angle);
       // p5.rectMode(p5.CENTER);
       // p5.fill(0);
       // p5.rect(0,0, this.w, this.h);
       input = p5.createInput().addClass('search');
       // s.rectMode(s.CENTER);
       input.position(pos.x, pos.y);
       input.style('width', this.width + 'px');
       input.style('height', this.height + 'px');
       p5.pop();


  }

  delete() {
    Matter.World.remove(this.world,this.body)
  }

}
