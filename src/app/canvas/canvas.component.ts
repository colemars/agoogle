import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';
import "p5/lib/addons/p5.dom";
import { Box } from '../models/box.model'
import { Logo } from '../models/logo.model'
import { Boundary } from '../models/boundary.model'
import { Search } from '../models/search.model'

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
        World = Matter.World,
        Bodies = Matter.Bodies,
        engine,
        world,
        search,
        searchBody,
        boxes = [],
        bodies = [],
        logo,
        mousePressed = false,
        ground,
        img;

    const sketch = (s) => {

      s.preload = () => {

        img = s.loadImage('./assets/images/logo.png');
        s.disableFriendlyErrors = true

      }

      s.setup = () => {
        s.createCanvas(window.innerWidth,window.innerHeight);
        engine = Engine.create();
        world = engine.world;

        var options = {
        isSleeping: true
        }

        search = new Search(s.width/2, s.height/3+20, 500, 40, world, s);
        search.build(s)
        let test2 = document.getElementById('search');





        logo = new Logo(s.width/2, s.height/4, img.width/2, img.height/2, options, img, world);


        ground = new Boundary(s.width/2, s.height+3, s.width, 100, {isStatic: true}, world);



      };

      s.mouseClicked = () => {

        var testOptions = {
        isStatic: false
        }



        if (!(mousePressed)) {
        logo.body.isSleeping = false;

        search.body.isSleeping = false;

        console.log(search);

        }

        mousePressed = true;

        boxes.push(new Logo(s.mouseX+10, s.mouseY, img.width/10, img.height/10, testOptions, img, world));

      }

      s.draw = () => {
        s.background(51);
        s.noStroke(255);
        s.fill(170);
        Engine.update(engine);
        var options = {
        isStatic: false
        }

        logo.show(s)
        ground.show(s)
        search.show(s)


        for (var i = 0; i < boxes.length; i++) {
        boxes[i].show(s);
        }
      };
    }
    this.p5 = new p5(sketch);
  }
}
