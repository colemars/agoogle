import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';

import { GetElementsComponent } from '../get-elements/get-elements.component.js'

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
    debugger;
    // this.Engine = Matter.Engine;
    // // let Engine: Matter.Engine,
    // //   // Render = Matter.Render,
    // this.World = Matter.World;
    // this.Bodies = Matter.Bodies;
  }

  static drawTest() {
    let Engine = Matter.Engine,
    World = Matter.World,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Composite = Matter.Composite,
    Common = Matter.Common,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

    let elements;
    let properties;

    let delta = [ 0, 0 ];
    let stage = [ window.screenX, window.screenY, window.innerWidth, window.innerHeight ];
    this.getBrowserDimensions(stage, delta);

    let engine = Engine.create();
    let world = engine.world;

    let render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        showVelocity: true,
        showAngleIndicator: true,
        wireframeBackground: 'transparent',
        background: 'transparent'
      }
    });

    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);

    properties = GetElementsComponent.get()[0];
    elements = GetElementsComponent.get()[1];

    World.add(world, [
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);

    engine.world.gravity.y = -1;

    var stack = Composites.stack(50, 120, 11, 5, 0, 0, function(x, y) {
      switch (Math.round(Common.random(0, 1))) {

        case 0:
        if (Common.random() < 0.8) {
          return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
        } else {
          return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
        }
        case 1:
        return Bodies.polygon(x, y, Math.round(Common.random(1, 8)), Common.random(20, 50));

      }
    });

    World.add(world, stack);

    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 }
    });

    //   for ( var i = 0; i < elements.length; i ++ ) {
    //
    //   var element = elements[ i ];
    //   element.style.position = 'absolute';
    //   element.style.left = ( - properties[i][2]/2) + 'px'; // will be set by renderer
    //   element.style.top = ( - properties[i][3]/2) + 'px';
    //   element.style.width = properties[i][2] + 'px';
    //   // element.addEventListener( 'mousedown', onElementMouseDown, false );
    //   // element.addEventListener( 'mouseup', onElementMouseUp, false );
    //   // element.addEventListener( 'click', onElementClick, false );
    //
    //   debugger;
    //
    //   Bodies[i] = Matter.Body.fromVertices('convex-polygon', {
    //     x: properties[i][0] + properties[i][2]/2,
    //     y: properties[i][1] + properties[i][3]/2,
    //     vertices: [
    //       { x: 0, y: 0 },
    //       { x: properties[i][2], y: 0 },
    //       { x: properties[i][2], y: properties[i][3] },
    //       { x: 0, y: properties[i][3] }
    //     ]
    //   });
    //   Bodies[i].view = element;
    //
    //   // Clean position dependencies
    //
    //   while ( element.offsetParent ) {
    //
    //     element = element.offsetParent;
    //     element.style.position = 'static';
    //
    //   }
    //
    //   console.log(element)
    //
    // }
    //
  }

  static getBrowserDimensions(stage, delta) {

    var changed = false;

    if ( stage[0] != window.screenX ) {

      delta[0] = (window.screenX - stage[0]) * 50;
      stage[0] = window.screenX;
      changed = true;
    }

    if ( stage[1] != window.screenY ) {

      delta[1] = (window.screenY - stage[1]) * 50;
      stage[1] = window.screenY;
      changed = true;
    }

    if ( stage[2] != window.innerWidth ) {

      stage[2] = window.innerWidth;
      changed = true;
    }

    if ( stage[3] != window.innerHeight ) {

      stage[3] = window.innerHeight;
      changed = true;
    }

    return changed;
  }

  // static drawThings() {
  //   let s = (sketch) => {
  //     sketch.setup = () => {
  //     sketch.createCanvas(window.innerWidth,window.innerHeight*2);
  //     sketch.background(40);
  //     };
  //     sketch.draw = () => {
  //
  //     }
  //   };
  //   const P5 = new p5(s);
  //
  // let Engine = Matter.Engine;
  // let World = Matter.World;;
  // let Bodies = Matter.Bodies;
  // let engine = Engine.create();
  // let world = engine.world;
  // let box =  Bodies.rectangle(400, 200, 80, 80);
  // console.log(box);
  // Engine.run(engine);
}
