import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Composites = Matter.Composites,
          Common = Matter.Common,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;


    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
          element: document.body,
          engine: engine,
          options: {
              width: window.innerWidth,
              height: window.innerHeight,
              background: '#0f0f13',
              showAngleIndicator: false,
              wireframes: false
          }
      });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const offset = 10,
        options = {
            isStatic: true,
            render: {
                 fillStyle: 'red',
                 strokeStyle: 'red',
                 lineWidth: 3
            }

    };

    world.bodies = [];

    console.log(options);
    World.add(world, [
       Bodies.rectangle(window.innerWidth/2, -offset, window.innerWidth, 50.5, options),
       Bodies.rectangle(window.innerWidth/2, window.innerHeight-30, window.innerWidth, 50.5, options),
       Bodies.rectangle(window.innerWidth + offset, window.innerHeight/2, 50.5, window.innerHeight + 2 * offset, options),
       Bodies.rectangle(-offset, window.innerHeight/2, 50.5, window.innerHeight, options)
   ]);


  }

}
