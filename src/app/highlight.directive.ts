import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bg = '#1E90FF	';
 @HostListener('mouseenter') mouseenter() {
   this.bg = '#0000FF';

  }
@HostListener('mouseleave') mouseleave() {
    this.bg = '#1E90FF';
  }

}
