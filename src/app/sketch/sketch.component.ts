import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import Two from "two.js";


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

  static setup() {
    let elem = document.getElementById('draw-shapes');
    let params = { width: 285, height: 200 };
    let two = new Two(params).appendTo(elem);

    var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
circle.fill = '#FF8000';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.linewidth = 5;

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();

    let Engine = Matter.Engine;
    let World = Matter.World;;
    let Bodies = Matter.Bodies;
    let engine = Engine.create();
    let world = engine.world;
    let box =  Bodies.rectangle(400, 200, 80, 80);
    console.log(box);
    Engine.run(engine);
  }




}
