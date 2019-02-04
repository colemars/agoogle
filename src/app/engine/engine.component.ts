import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import { GetElementsComponent } from '../get-elements/get-elements.component';
//fix for not finding poly-decomp error
declare var global: any
declare var require: any;
global.decomp = require('poly-decomp');


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

    let elements = [];
    let bodies = [];

    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'black',
        showAngleIndicator: false,
        wireframes: false
      }
    });

    // Render.run(render);

    const runner = Runner.create();
    Runner.run(engine);

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

    elements = GetElementsComponent.get();





    const length = elements.length;
    let i;
    for ( i = 0; i < length; i++ ) {


      let element = elements[i][0]
      let properties = elements[i][1]

      console.log(properties)

      // debugger;

      element.style.position = 'absolute';
      element.style.left = (350) + 'px'; // will be set by renderer
      element.style.top = ( - properties[3]/2) + 'px';
      element.style.width = properties[2] + 'px';

      let chevron = Matter.Vertices.fromPath(`50 0 75 50 100 100 25 100 0 50 25 0`),
      arrow = Matter.Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');

      // debugger;

   //    var stack = Composites.stack(50, 50, 6, 4, 10, 10, function(x, y) {
   //     var color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);
   //     return Bodies.fromVertices(x, y, chevron, {
   //         render: {
   //             fillStyle: color,
   //             strokeStyle: color,
   //             lineWidth: 1
   //         }
   //     }, true);
   // });

   // console.log(stack)

   // World.add(world, stack);

      let test = Bodies.fromVertices(properties[0],properties[1], [
          { x: 0, y: 0 },
          { x: properties[2], y: 0 },
          { x: properties[2], y: properties[3] },
          { x: 0, y: properties[3] },
        ], {isStatic: false});

      // debugger;

      world.bodies.push(test);

      console.log("test ", world.bodies);


      World.add(world, test);

    };

      // console.log(test.position.x)



    World.add(world, [
      Bodies.rectangle(window.innerWidth/2, -offset, window.innerWidth, 50.5, options),
      Bodies.rectangle(window.innerWidth/2, window.innerHeight-30, window.innerWidth, 50.5, options),
      Bodies.rectangle(window.innerWidth + offset, window.innerHeight/2, 50.5, window.innerHeight + 2 * offset, options),
      Bodies.rectangle(-offset, window.innerHeight/2, 50.5, window.innerHeight, options)
    ]);


    // add mouse control
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

    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight }
    });


    function loop(timestamp) {
      var progress = timestamp - lastRender

      for ( i = 0; i < length; i++ ) {
        let element = elements[i][0]
        let properties = elements[i][1]

        // debugger;
        console.log('body ', world.bodies[0].position.x)
        console.log('element ', element.style.left  )


        // debugger;

        element.style.position = 'absolute';
        // element.style.left = ( - properties[2]/2) + 'px'; // will be set by renderer
        element.style.top = (world.bodies[0].position.y + 'px');
        // element.style.width = properties[2] + 'px';
        //
        // let chevron = Matter.Vertices.fromPath(`50 0 75 50 100 100 25 100 0 50 25 0`),
        // arrow = Matter.Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
       }

      lastRender = timestamp
      window.requestAnimationFrame(loop)
    }

    let lastRender = 0
    window.requestAnimationFrame(loop)






    let logo = Bodies.rectangle(window.innerWidth/2, window.innerHeight/4, window.innerWidth, 50.5, {
      isStatic: true,
      render: {
        sprite: {
          texture: './assets/images/logo.png'
        }
      }
    })

    World.add(world, logo);



  //   var stack = Composites.stack(1, 20, 10, 4, 0, 0, function(x, y) {
  //     if (Common.random() > 0.35) {
  //       return Bodies.rectangle(x, y, 64, 64, {
  //         render: {
  //           strokeStyle: '#ffffff',
  //           sprite: {
  //             texture: './assets/images/logo.png'
  //           }
  //         }
  //       });
  //     }
  //   })
  //
  //   World.add(world, stack);
  //
  //
  // }

}
