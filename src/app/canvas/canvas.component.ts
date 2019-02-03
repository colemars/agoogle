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
        // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    let engine;
    let world;
    let search;
    let boxes = [];
    let bodies = [];
    let logo;
    let mousePressed = false;


    let ground;

    let img;

    const sketch = (s) => {

      s.preload = () => {

        img = s.loadImage('./assets/images/logo.png');
        s.disableFriendlyErrors = true

      }

      s.setup = () => {
        s.createCanvas(window.innerWidth,window.innerHeight);
        engine = Engine.create();
        world = engine.world;
        //Engine.run(engine);
        var options = {
        isStatic: true
        }

        var options = {
        isStatic: true
        }

        // input = new Search(s.width/2-250, s.height/3, 500, 40, world)

        search = Bodies.rectangle(s.width/2, s.height/3, 500, 1, options)

        World.add(world, search)

        search = s.createInput().addClass('search');
        search.position(s.width/2-250, s.height/3);
        search.style('width', '500px');
        search.style('height', '40px');

        logo = new Logo(s.width/2, s.height/4, img.width/2, img.height/2, options, img, world);


        ground = new Boundary(s.width/2, s.height+3, s.width, 100, options, world);

        // logo[0] = new Logo(s.width/2, s.height/3, img.width/2, img.height/2, options, img, world);


      };

      s.mouseClicked = () => {
        var options = {
        isStatic: true
        }
        var testOptions = {
        isStatic: false
        }



        if (!(mousePressed)) {
        logo.delete();
        logo = new Logo(s.width/2, s.height/4, img.width/2, img.height/2, testOptions, img, world);
        }

        mousePressed = true;



        // logo.body.isStatic = false;

        // if (!(logo === null)) {
        //   console.log(logo)
        //   logo.body.isStatic = false;
        // }

        boxes.push(new Logo(s.mouseX+10, s.mouseY, img.width/10, img.height/10, testOptions, img, world));

        // console.log(img)
          // logo = new Box(0, s.height / 2, img.width / 2, img.height / 2, world)
        // boxes.push(new Logo(s.mouseX, s.mouseY, img.width/10, img.height/10, img, world));
        // console.log(img)
        // boxes.push(new Box(s.mouseX, s.mouseY, s.random(10, 40), s.random(10, 40), world));
      }

      s.draw = () => {
        s.background(51);
        s.noStroke(255);
        s.fill(170);
        Engine.update(engine);
        var options = {
        isStatic: false
        }
        // debugger;

        // if (mousePressed === false) {
          // console.log(logo)

        // }
        // for (var i = 0; i < logo.length; i++) {
        // logo[i].show(s);
        // }
        logo.show(s)
        ground.show(s)
        // input.show(s)

        // var val = slider.value();
        // s.background(val);

        for (var i = 0; i < boxes.length; i++) {
        boxes[i].show(s);
        // logo[i].show(s);
        // logo.show(s);
        // console.log(logo)
        }
        s.rectMode(s.CENTER);
        // s.image(img, 0, s.height / 2, img.width / 2, img.height / 2);
        // console.log(s.height)
        s.rect(s.width/2, s.height/3, 500, 1);
        };
      }
    this.p5 = new p5(sketch);
  }
}
