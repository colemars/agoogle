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
    let objects = [];
    let elements;
    let properties = [];


    elements = document.getElementsByClassName("physics-element");
    console.log(elements.length)

    let length = elements.length;
    let i;
    for ( i = 0; i < length; i++ ) {
      properties[i] = GetElementsComponent.properties( elements[i] );
      objects[i] = [elements[i], properties[i]]
      console.log(i)
    }
    return objects;
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
