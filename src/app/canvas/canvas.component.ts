import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';
import { Box } from '../models/box.model'
import { Logo } from '../models/logo.model'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  p5 : any;
  constructor() {

  }

  ngOnInit() {

    let Engine = Matter.Engine,
        // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    let engine;
    let world;
    let boxes = [];
    let bodies = [];
    let logo;

    let ground;

    let img;

    const sketch = (s) => {

      s.preload = () => {
      }

      s.setup = () => {
        s.createCanvas(400, 400);
        engine = Engine.create();
        world = engine.world;
        //Engine.run(engine);
        var options = {
        isStatic: true
        }

        img = s.loadImage('./assets/images/logo.png');

        ground = Bodies.rectangle(s.width/2, s.height/2, s.width, 10, options);

        World.add(world, ground);
      };

      s.mouseClicked = () => {
          // logo = new Box(0, s.height / 2, img.width / 2, img.height / 2, world)
        boxes.push(new Logo(s.mouseX, s.mouseY, img.width/10, img.height/10, img, world));
        console.log(img)
        // boxes.push(new Box(s.mouseX, s.mouseY, s.random(10, 40), s.random(10, 40), world));
      }

      s.draw = () => {
        s.background(51);
        s.noStroke(255);
        s.fill(170);
        Engine.update(engine);
        for (var i = 0; i < boxes.length; i++) {
        boxes[i].show(s);
        // logo.show(s);
        // console.log(logo)
        }
        // s.rectMode(CENTER);
        // s.image(img, 0, s.height / 2, img.width / 2, img.height / 2);

        // s.rect(ground.position.x, ground.position.y, s.width, 100);
        };
      }
    this.p5 = new p5(sketch);
  }
}
