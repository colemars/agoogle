import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js'
import { GetElementsComponent } from './get-elements/get-elements.component.js'
import { SketchComponent } from './sketch/sketch.component.js'
// import { Two } from 'two.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  test: string;

  constructor() {}

  ngOnInit(){
    GetElementsComponent.get()
    // console.log(document.body.innerHTML)
    // document.body.innerHTML = ""
    SketchComponent.drawTest();
  }


}
