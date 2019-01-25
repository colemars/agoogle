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
      Composites = Matter.Composites,
      Composite = Matter.Composite,
      Body = Matter.Body,
      Bodies = Matter.Bodies,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

    let delta = [ 0, 0 ];
    let stage = [ window.screenX, window.screenY, window.innerWidth, window.innerHeight ];
    this.getBrowserDimensions(stage, delta);

    let engine = Engine.create();

    GetElementsComponent.get()
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




}
