import {AfterViewInit, Component, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';

import * as Hammer from 'hammerjs';

/**
 * Country weather component
 */
@Component({
  selector: 'app-country-weather',
  templateUrl: './country-weather.component.html',
  styleUrls: ['./country-weather.component.scss']
})
export class CountryWeatherComponent implements OnInit, AfterViewInit {

  /** reference to html component */
  @ViewChild('carousel') carousel;
  /** reference to html component */
  @ViewChild('carouselContainer') carouselContainer;
  /** reference to html component */
  @ViewChildren('carouselItem') carouselItem;

  public carouselItemWidth = 0;
  public leftPosition = 0;
  public carouselContainerWidth = 0;
  public carouselOffset = 0;
  public mockWeather = [
    {time: '2 PM', icon: 'weather-icon-2', temp: 24},
    {time: '3 PM', icon: 'weather-icon-3', temp: 22},
    {time: '4 PM', icon: 'weather-icon-2', temp: 19},
    {time: '5 PM', icon: 'weather-icon-2', temp: 24},
    {time: '6 PM', icon: 'weather-icon-3', temp: 22},
    {time: '7 PM', icon: 'weather-icon-2', temp: 19},
    {time: '8 PM', icon: 'weather-icon-2', temp: 24},
    {time: '9 PM', icon: 'weather-icon-2', temp: 22},
    {time: '10 PM', icon: 'weather-icon-3', temp: 19},
    {time: '11 PM', icon: 'weather-icon-3', temp: 19},
    {time: '12 PM', icon: 'weather-icon-3', temp: 19},
    {time: '13 PM', icon: 'weather-icon-2', temp: 19},
    {time: '14 PM', icon: 'weather-icon-2', temp: 24},
    {time: '15 PM', icon: 'weather-icon-3', temp: 22},
    {time: '16 PM', icon: 'weather-icon-2', temp: 19},
    {time: '17 PM', icon: 'weather-icon-2', temp: 24},
    {time: '18 PM', icon: 'weather-icon-3', temp: 22},
    {time: '19 PM', icon: 'weather-icon-2', temp: 19},
    {time: '20 PM', icon: 'weather-icon-2', temp: 24},
    {time: '21 PM', icon: 'weather-icon-2', temp: 22},
    {time: '22 PM', icon: 'weather-icon-3', temp: 19},
    {time: '23 PM', icon: 'weather-icon-3', temp: 19},
    {time: '24 PM', icon: 'weather-icon-3', temp: 19}
  ]


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  /**
   * Slide weather carousel forward
   */
  moveForward() {
    if (this.leftPosition < 0) this.leftPosition += this.carouselItemWidth;
    this.renderer.setStyle(this.carousel.nativeElement, 'left', `${this.leftPosition}px`);
  }
  /**
   * Slide weather carousel backward
   */
  moveBackward() {
    if (this.leftPosition > this.carouselOffset) this.leftPosition -= this.carouselItemWidth;
    this.renderer.setStyle(this.carousel.nativeElement, 'left', `${this.leftPosition}px`);
  }


  ngAfterViewInit() {
    this.carouselContainerWidth = this.carouselContainer.nativeElement.clientWidth;
    this.carouselItemWidth = this.carouselItem.length;
    this.carouselItemWidth = this.carouselItem.map(res => res)[0].nativeElement.clientWidth;
    this.carouselOffset = this.carouselContainerWidth - this.carousel.nativeElement.clientWidth;


    /**
     *  Hammer -> for swiping img-sliders on mobile  devices
     */
    Hammer(this.carouselContainer.nativeElement).on('swipeleft', () => this.moveBackward());

    Hammer(this.carouselContainer.nativeElement).on('swiperight', () => this.moveForward());

  }

}
