import * as Matter from 'matter-js';

export class Box {
  [x: string]: any;

  constructor(x,y,w,h,world) {
    this.body = Matter.Bodies.rectangle(x,y,w,h);
    this.x = x;
    this.y = y;
    Matter.World.add(world, this.body);
  }

  ngOnInit() {
  }

  show(p5) {
    const pos = this.body.position;
    const angle = this.body.angle;

    p5.push();
    p5.translate(pos.x, pos.y);
    p5.rect(0,0,this.w,this.h)
    }

}
