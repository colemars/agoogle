import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js';
import * as p5 from 'p5';
import "p5/lib/addons/p5.dom";
import { Box } from '../models/box.model'
import { Logo } from '../models/logo.model'
import { Boundary } from '../models/boundary.model'
import { Search } from '../models/search.model'
import { HeaderItem } from '../models/header-item.model'

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
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint,
        engine,
        world,
        canvas,
        search,
        searchBody,
        boxes = [],
        bodies = [],
        contents = [],
        mousePressed = false,
        mConstraint,
        ground,
        ceiling,
        left_wall,
        right_wall,
        logo,
        logo_img,
        gmail,
        gmail_img,
        search_img,
        lucky_img,
        images,
        images_img,
        menu,
        menu_img,
        sign_in,
        sign_in_img,
        about,
        about_img,
        store,
        store_img;

    const sketch = (s) => {

      s.preload = () => {

        //google logo
        logo_img = s.loadImage('./assets/images/logo.png');

        //about text
        about_img = s.loadImage('./assets/images/about.png');

        store_img = s.loadImage('./assets/images/store.png');

        gmail_img = s.loadImage('./assets/images/gmail.png');

        images_img = s.loadImage('./assets/images/images.png');

        menu_img = s.loadImage('./assets/images/menu.png');

        sign_in_img = s.loadImage('./assets/images/sign_in.png');

        search_img = s.loadImage('./assets/images/search.png');

        lucky_img = s.loadImage('./assets/images/lucky.png');

        //supposed to help performance
        s.disableFriendlyErrors = true

      }

      s.setup = () => {

        //builds p5 canvas
        canvas = s.createCanvas(window.innerWidth,window.innerHeight);

        //creates engine and world for matter.js physics bodies
        engine = Engine.create();
        world = engine.world;

        //sets sleeping to true. Unique from static because sleeping can be toggled(awoke).

        //builds sleeping search bar, could probably be refactored
        search = new Search(s.width/2, s.height/3+20, 500, 40, world, s);
        search.build(s)


        contents.push(
          new HeaderItem(s.width/2+75,s.height/2-50,lucky_img.width/2, lucky_img.height/2, true, lucky_img, world),
          new HeaderItem(s.width/2-90,s.height/2-50,search_img.width/2, search_img.height/2, true, search_img, world),
          new HeaderItem(s.width-55,30,sign_in_img.width/2, sign_in_img.height/2, true, sign_in_img, world),
          new HeaderItem(s.width-125,30,menu_img.width/2, menu_img.height/2, true, menu_img, world),
          new HeaderItem(s.width-180,30,images_img.width/2, images_img.height/2, true, images_img, world),
          new HeaderItem(s.width-240,30,gmail_img.width/2, gmail_img.height/2, true, gmail_img, world),
          new HeaderItem(110,30,store_img.width/2, store_img.height/2, true, store_img, world),
          new HeaderItem(50,30,about_img.width/2, about_img.height/2, true, about_img, world),
          new Logo(s.width/2, s.height/4, logo_img.width/2, logo_img.height/2, true, logo_img, world)
        )


        console.log(contents)



        //builds ground
        ground = new Boundary(s.width/2, s.height+3, s.width, 85, {isStatic: true}, world);
        ceiling = new Boundary(s.width/2, 0, s.width, 30, {isStatic: true}, world);
        left_wall = new Boundary(0, s.height/2, 30, s.height, {isStatic: true}, world);
        right_wall = new Boundary(s.width, s.height/2, 30, s.height, {isStatic: true}, world);
        // ground = new Boundary(s.width/2, s.height+3, s.width, 85, {isStatic: true}, world);

        const canvasPointer = Mouse.create(canvas.elt);
          canvasPointer.pixelRatio = s.pixelDensity();
          const options = {
            mouse: canvasPointer
          }
          mConstraint = MouseConstraint.create(engine, options)
          World.add(world, mConstraint);
      };

      s.mouseClicked = () => {
        //wakes everything up and adds bodies to array

        for (var i = 0; i < contents.length; i++) {
          contents[i].body.isSleeping = false;
        };
        search.body.isSleeping = false;
        // boxes.push(new Logo(s.mouseX+10, s.mouseY, logo_img.width/10, logo_img.height/10, false, logo_img, world));
      }


      //canvas update
      s.draw = () => {
        s.background('white');
        s.noStroke(255);
        s.fill(170);
        Engine.update(engine);

        //updates positions relative to matter bodies
        ground.show(s)
        // ceiling.show(s)
        // left_wall.show(s)
        // right_wall.show(s)
        search.show(s)
        // shows all generated bodies from array
        for (var i = 0; i < contents.length; i++) {
          contents[i].show(s)
        }
        for (var i = 0; i < boxes.length; i++) {
        boxes[i].show(s);
        }
      };
    }
    this.p5 = new p5(sketch);
  }
}
