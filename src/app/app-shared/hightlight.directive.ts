import { Directive, ElementRef, Renderer, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  private originalColor: any;

  @Input()
  appHightlight: string; //must be the same name as the selector!!!

  @HostBinding("class.hover") //class.hover => the css class hover
  isHover: boolean

  constructor(private elementRef: ElementRef, private renderer: Renderer) {

  }

  @HostListener("mouseenter")
  mouseEnter() {
    this.originalColor = this.elementRef.nativeElement.style.backgroundColor;
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.appHightlight || 'yellow');
    this.isHover = true;
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.originalColor);
    this.isHover = false;
  }

}
