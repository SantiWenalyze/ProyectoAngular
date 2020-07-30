import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos') textos;

  constructor() {
    this.captions = false;
  }

  ngOnInit(): void {
  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  getAutor(event){
    this.autor = event;
  }

  alerta(){
    alert(this.textos.nativeElement.textContent);

  }

}
