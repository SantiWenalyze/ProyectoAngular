import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { combineLatest } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') aliasEtiq: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {

    this.autor = {
      nombre: "Santi Perez",
      website: "google.com"
    };
  }

  ngOnInit(): void {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: this.aliasEtiq,
      slideWidth: this.anchura
    });
  }

  lanzar(event) {
    this.conseguirAutor.emit(this.autor);
  }



}
