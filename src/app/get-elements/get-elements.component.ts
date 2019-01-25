import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-elements',
  templateUrl: './get-elements.component.html',
  styleUrls: ['./get-elements.component.css']
})
export class GetElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  static get() {
    let elements;
    let properties = [];


    elements = document.getElementsByClassName("physics-element");


    for ( let i = 0; i < elements.length; i ++ ) {

      properties[i] = GetElementsComponent.properties( elements[i] );

    }
    console.log(properties)
  }

  static properties( element ) {

  let x = 0;
  let y = 0;
  let width = element.offsetWidth;
  let height = element.offsetHeight;

  do {

    x += element.offsetLeft;
    y += element.offsetTop;

  } while ( element = element.offsetParent );

  return [ x, y, width, height ];
}



}
