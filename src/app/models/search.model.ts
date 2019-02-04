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
      isSleeping: true,
    }

    this.element;
    this.body = Matter.Bodies.rectangle(x,y,w,h,this.options);

    Matter.World.add(this.world, this.body);


    this.body.position.x = this.body.bounds.min.x;
    this.body.position.y = this.body.bounds.min.y;
    this.body.positionPrev.x = this.body.bounds.min.x;
    this.body.positionPrev.y = this.body.bounds.min.y;


  }

  build(p5) {


       let pos = this.body.position;
       let angle = this.body.angle;





           p5.push();
           this.element = p5.createInput().id('search');

           this.element.position(pos.x, pos.y);
           document.getElementById('search').style.width = this.w + 'px';
           document.getElementById('search').style.height = this.h + 'px';
          
           p5.pop();


  }

  show(p5) {
    p5.push();
    let pos = this.body.position;
    let angle = this.body.angle;
    this.element.position(pos.x, pos.y);
    p5.rotate(angle);
    p5.pop();
  }

  delete() {
    Matter.World.remove(this.world,this.body)
  }

}
