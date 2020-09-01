import { Component, OnInit } from '@angular/core';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': 'https://placeimg.com/1920/480/any'}, 
    {'image': 'https://placeimg.com/1920/480/any'},
    {'image': 'https://placeimg.com/1920/480/any'}, 
    {'image': 'https://placeimg.com/1920/480/any'}, 
    {'image': 'https://placeimg.com/1920/480/any'}];

}
