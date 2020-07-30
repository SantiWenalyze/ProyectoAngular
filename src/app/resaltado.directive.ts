import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el: ElementRef) {
    var elemento = el.nativeElement;
    elemento.style.textTransform="uppercase";
    elemento.style.fontSize="30px";
    elemento.style.fontWeight="bold";
    elemento.style.color="tomato";
  }

}
