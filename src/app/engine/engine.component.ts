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

    // const render = Render.create({
    //   element: document.body,
    //   engine: engine,
    //   options: {
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //     background: 'black',
    //     showAngleIndicator: false,
    //     wireframes: false
    //   }
    // });
    //
    // Render.run(render);
    //
    // const runner = Runner.create();
    // Runner.run(runner, engine);

    const offset = 10,
    options = {
      isStatic: true,
      render: {
        fillStyle: 'red',
        strokeStyle: 'red',
        lineWidth: 3,
        opacity: .1
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

    // let logo = Bodies.rectangle(window.innerWidth/2, window.innerHeight/4, window.innerWidth, 50.5, {
    //   isStatic: true,
    //   render: {
    //     sprite: {
    //       texture: './assets/images/logo.png'
    //     }
    //   }
    // })
    //
    // World.add(world, logo);
    //
    //

    // var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
    //   if (Common.random() > 0.35) {
    //     return Bodies.rectangle(x, y, 64, 64, {
    //       render: {
    //         strokeStyle: '#ffffff',
            // sprite: {
            //   texture: './assets/images/logo.png'
            // }
    //       }
    //     });
    //   }
    // })

    // World.add(world, stack);


  }

}
