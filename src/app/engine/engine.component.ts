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
            isStatic: true
    };

    world.bodies = [];


  }

}
