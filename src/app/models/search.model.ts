import * as Matter from 'matter-js';
import * as p5 from 'p5';

export class Search {
  [x: string]: any;
  constructor(x, y, w, h, world, p5) {
    this.w = w;
    this.h = h;
    this.world = world;
    this.options = {
      friction: 0.3,
      restitution: 0.6,
      isStatic: true,
    }

    this.body = Matter.Bodies.rectangle(x,y,w,1,this.options)
    Matter.World.add(this.world, this.body);

  }

  show(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;

       let input;



           p5.push();
           input = p5.createInput().id('search');
           // s.rectMode(s.CENTER);
           // p5.translate(pos.x, pos.y);
           input.position(pos.x-this.w/2, pos.y);
           document.getElementById('search').style.width = this.w + 'px';
           document.getElementById('search').style.height = this.h + 'px';
           // p5.rect(pos.x, pos.y, this.w, this.h);
           p5.pop();


  }

  delete() {
    Matter.World.remove(this.world,this.body)
  }

}
