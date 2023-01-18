import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowModal]',
})
export class ShowModalDirective {
  @HostBinding('style.display') display = 'hidden';
  constructor() {}
  @HostListener('click')
  click() {
    this.display = 'box';
  }
}
