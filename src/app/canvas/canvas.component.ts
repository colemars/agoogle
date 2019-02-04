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
        engine,
        world,
        search,
        searchBody,
        boxes = [],
        bodies = [],
        contents = [],
        mousePressed = false,
        ground,
        logo,
        logo_img,
        gmail,
        gmail_img,
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

        //supposed to help performance
        s.disableFriendlyErrors = true

      }

      s.setup = () => {

        //builds p5 canvas
        s.createCanvas(window.innerWidth,window.innerHeight);

        //creates engine and world for matter.js physics bodies
        engine = Engine.create();
        world = engine.world;

        //sets sleeping to true. Unique from static because sleeping can be toggled(awoke).
        var options = {
        isSleeping: true
        }

        //builds sleeping search bar, could probably be refactored
        search = new Search(s.width/2, s.height/3+20, 500, 40, world, s);
        search.build(s)


        contents.push(
          new HeaderItem(s.width-55,30,sign_in_img.width/2, sign_in_img.height/2, options, sign_in_img, world),
          new HeaderItem(s.width-125,30,menu_img.width/2, menu_img.height/2, options, menu_img, world),
          new HeaderItem(s.width-180,30,images_img.width/2, images_img.height/2, options, images_img, world),
          new HeaderItem(s.width-240,30,gmail_img.width/2, gmail_img.height/2, options, gmail_img, world),
          new HeaderItem(110,30,store_img.width/2, store_img.height/2, options, store_img, world),
          new HeaderItem(50,30,about_img.width/2, about_img.height/2, options, about_img, world),
          new Logo(s.width/2, s.height/4, logo_img.width/2, logo_img.height/2, options, logo_img, world)
        )


        console.log(contents)



        //builds ground
        ground = new Boundary(s.width/2, s.height+3, s.width, 100, {isStatic: true}, world);
      };

      //wakes everything up and adds bodies to array
      s.mouseClicked = () => {
        const logoArrayOptions = {
        isStatic: false
        }
        //sets all from contents array toSleep false
        for (var i = 0; i < contents.length; i++) {
          contents[i].body.isSleeping = false;
        };
        search.body.isSleeping = false;
        boxes.push(new Logo(s.mouseX+10, s.mouseY, logo_img.width/10, logo_img.height/10, logoArrayOptions, logo_img, world));
      }


      //canvas update
      s.draw = () => {
        s.background('white');
        s.noStroke(255);
        s.fill(170);
        Engine.update(engine);
        var options = {
        isStatic: false
        }

        //updates positions relative to matter bodies
        ground.show(s)
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
