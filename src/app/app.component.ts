import { Component, OnInit } from '@angular/core';
import * as Matter from 'matter-js'
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
    let elements;
    let properties = [];

    elements = document.getElementsByClassName("physics-element");


    for ( var i = 0; i < elements.length; i ++ ) {

      properties[i] = this.getElementProperties( elements[i] );

    }
    console.log(properties)
  }

  getElementProperties( element ) {

  var x = 0;
  var y = 0;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  do {

    x += element.offsetLeft;
    y += element.offsetTop;

  } while ( element = element.offsetParent );

  return [ x, y, width, height ];
}


}
